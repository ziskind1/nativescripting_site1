import * as React from 'react';
import Link from 'gatsby-link';

import NsLink from '../components/NsLink';


const FlavorTemplate: React.StatelessComponent<{ data: any }> = ({ data }) => {
    //console.log('flavor template data: ');
    // console.log(data);

    const courses = data.allCoursesJson.edges.map((edge: any) => {
        const node = edge.node;
        return { id: node.id, title: node.title };
    });

    const coursesHtml = courses.map((course: any, i: number) => {
        return (
            <div key={i}>
                <h4>{course.title}</h4>
            </div>
        );
    });

    return (
        <div>
            <h1>Flavor template</h1>
            {coursesHtml}
        </div>
    );
};

export const query = graphql`
  query FlavorPage($flavor: String) {
    allCoursesJson(
      limit: 1000
      filter: { flavors: { in: [$flavor] } } 
    ) {
      totalCount
      edges {
        node {
            id
            title
        }
      }
    }
  }
`

export default FlavorTemplate;
