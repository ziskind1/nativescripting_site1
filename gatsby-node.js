const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

/*
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
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

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
              )  {
            edges {
              node {
                excerpt(pruneLength: 250)
                html
                id
                timeToRead
                frontmatter {
                  date
                  tags
                  path
                  title
                }
              }
            }
          }
        }
      `
        ).then(result => {
            console.log('DATA: ');
            console.log(result);

            //const flavoredCourses = result.data.allCoursesJson.edges;
            createFlavorPages(createPage);

            const posts = result.data.allMarkdownRemark.edges;

            createTagPages(createPage, posts);

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
            resolve();
        });
    });
};

const createFlavorPages = (createPage) => {
    const flavorTemplate = path.resolve(`src/templates/flavor.tsx`);

    /*
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
*/
};

const createTagPages = (createPage, edges) => {
    const tagTemplate = path.resolve(`src/templates/tags.tsx`);
    const posts = {};

    edges
        .forEach(({ node }) => {
            if (node.frontmatter.tags) {
                node.frontmatter.tags
                    .forEach(tag => {
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

    Object.keys(posts)
        .forEach(tagName => {
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
