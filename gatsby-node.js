const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const config = require('./config/SiteConfig').default;

/*
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    console.log('Other type: ' + node.internal.type);
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `posts` });
        console.log('MY SLUG: ' + slug);
        createNodeField({
            node,
            name: `slug`,
            value: '/posts' + slug,
        });
    } else {
        //console.log('Other type: ' + node.internal.type);
    }
};
*/

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allCoursesJson {
          totalCount
          edges {
            node {
              courseId
              title
              flavors
              url
              authors
            }
          }
        }

        allTracksJson {
          totalCount
          edges {
            node {
              trackId
              levels {
                levelId
                title
                description
              }
            }
          }
        }

        allMarkdownRemark(
          filter: { frontmatter: { draft: { ne: true } } }
          sort: { order: ASC, fields: [frontmatter___updatedDate] }
          limit: 1000
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
              timeToRead
              frontmatter {
                createdDate
                updatedDate
                tags
                path
                title
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      //const flavoredCourses = result.data.allCoursesJson.edges;
      //createFlavorPages(createPage);

      const courses = result.data.allCoursesJson.edges;
      createCoursePages(createPage, courses);

      const tracks = result.data.allTracksJson.edges;
      createTrackPages(createPage, tracks);

      const types = [
        { name: 'All' },
        { name: 'Free' },
        { name: 'Core' },
        { name: 'Angular' },
        { name: 'Vue' }
      ];

      createCourseTypePages(createPage, types);

      const posts = result.data.allMarkdownRemark.edges;
      const postsPerPage = config.POSTS_PER_PAGE;
      const numPages = Math.ceil(posts.length / postsPerPage);

      createPostPages(createPage, posts, postsPerPage, numPages);
      createTagPages(createPage, posts);

      /*
            posts.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: path.resolve(`./src/templates/post.tsx`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.frontmatter.path,
                    },
                });
            });
            */
      resolve('done');
    });
  });
};

const createCoursePages = (createPage, courses) => {
  const courseTemplate = path.resolve(`src/templates/course.tsx`);

  courses.forEach(o => {
    const course = o.node;
    createPage({
      path: `/course/${course.url}`,
      component: courseTemplate,
      context: {
        courseUrl: course.url
      }
    });
  });
};

const createTrackPages = (createPage, tracks) => {
  const template = path.resolve(`src/templates/track.tsx`);

  tracks.forEach(o => {
    const track = o.node;
    createPage({
      path: `/track/${track.trackId}`,
      component: template,
      context: {
        trackId: track.trackId
      }
    });
  });
};

const createCourseTypePages = (createPage, types) => {
  const template = path.resolve(`src/templates/courses.tsx`);

  types.forEach(cType => {
    createPage({
      path: `/courses/${cType.name.toLowerCase()}`,
      component: template,
      context: {
        coursesType: cType.name
      }
    });
  });
};

const isZero = a => a === 0;
const inc = a => a + 1;
const dec = a => a - 1;
const isFirst = isZero;
const isLast = (index, total) => index === dec(total);

/*
const isFirstPage = isZero;
const isLastPage = (index, total) => index === dec(total);
const previousPostPath = (articlePagePath, groupIndex) =>
  !isFirstPage(groupIndex) ? articlePagePath(dec(groupIndex)) : null;
const nextPostPath = (articlePagePath, groupIndex, groupTotal) =>
  !isLastPage(groupIndex, groupTotal) ? articlePagePath(inc(groupIndex)) : null;
*/

const prevPost = (posts, curIdx) =>
  isFirst(curIdx) ? null : posts[dec(curIdx)];

const nextPost = (posts, curIdx) =>
  isLast(curIdx, posts.length) ? null : posts[inc(curIdx)];

const createPostPages = (createPage, posts, postsPerPage, numPages) => {
  const postTemplate = path.resolve(`src/templates/post.tsx`);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.resolve(`src/templates/posts.tsx`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages: numPages,
        currentPage: i + 1
      }
    });
  });

  posts.forEach(({ node }, postIdx) => {
    const prev = prevPost(posts, postIdx);
    const next = nextPost(posts, postIdx);

    const prevPath = prev && prev.node && prev.node.frontmatter.path;
    const nextPath = next && next.node && next.node.frontmatter.path;

    //console.log(
    //  'creating post: ' + node.frontmatter.path + ' , next path: ' + nextPath
    //);

    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.frontmatter.path,
        prevPostPath: prevPath || '',
        nextPostPath: nextPath || ''
      }
    });
  });
};

const createFlavorPages = createPage => {
  const flavorTemplate = path.resolve(`src/templates/flavor.tsx`);
  createPage({
    path: `/core`,
    component: flavorTemplate,
    context: {
      flavor: 'core'
    }
  });

  createPage({
    path: `/angular`,
    component: flavorTemplate,
    context: {
      flavor: 'ng'
    }
  });
};

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.tsx`);
  const posts = {};

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });

  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts).forEach(tagName => {
    const post = posts[tagName];
    createPage({
      path: `/tags/${tagName}`,
      component: tagTemplate,
      context: {
        posts,
        post,
        tag: tagName
      }
    });
  });
};
