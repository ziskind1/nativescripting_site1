import * as React from 'react';
import Link from 'gatsby-link';

import NsLink from '../components/NsLink';


const CourseTemplate: React.StatelessComponent<{ data: any }> = ({ data }) => {

    console.log(data);

    const title = data.coursesJson.title;

    return (
        <div>
            <h1>Course</h1>

            <h4>{title}</h4>

        </div>
    );
};


export const coursePageQuery = graphql`
query CoursePageQuery($courseUrl: String) {
    coursesJson(url: {eq: $courseUrl}) {
      id
      title
      subtitle
      description
      url
      flavors
      level
      tag
      launchdate
      authors {
        name
        picture
        bio
        title
      }
      products {
        id
      }
      chapters {
        id
        name
        lessons {
          chapterId
          id
          name
        }
      }
    }
  }
`


export default CourseTemplate;
