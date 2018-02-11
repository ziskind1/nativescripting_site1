import * as React from "react";
import Link from "gatsby-link";
import FlavoredCourseList, { FlavoredCourseListProps } from "../components/FlavoredCourseList";


// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
    data: {
        allCoursesJson: {
            totalCount: number;
            edges: {
                node: any;
            }[]
        };
    };
}

interface IndexPageState {
    courses: any[];
    filteredCourses: any[];
}

export default class extends React.Component<IndexPageProps, IndexPageState> {


    constructor(props: IndexPageProps) {
        super(props);

        const courses = this.props.data.allCoursesJson.edges.map((edge: any) => {
            const node = edge.node;
            return { id: node.id, title: node.title, flavors: node.flavors, url: node.url };
        });

        this.state = {
            courses: courses,
            filteredCourses: courses
        };
    }

    private filterByFlavorCore() {
        const filteredCourses = this.state.courses.filter(c =>
            c.flavors.indexOf('core') >= 0);
        this.setState({ filteredCourses: filteredCourses });
    }

    private filterByFlavorNg() {
        const filteredCourses = this.state.courses.filter(c =>
            c.flavors.indexOf('ng') >= 0);
        this.setState({ filteredCourses: filteredCourses });
    }

    public render() {
        console.log('RENDER SHIT');
        console.log(this.props.data);

        const props: FlavoredCourseListProps = {
            flavor: 'ng',
            courses: this.state.filteredCourses
        };

        return (
            <div>
                <h1>
                    Thi sis the home page of my site
                </h1>

                <p>
                    <button onClick={() => this.filterByFlavorCore()}>Core</button>
                    <button onClick={() => this.filterByFlavorNg()}>Angular</button>
                </p>

                <FlavoredCourseList {...props}></FlavoredCourseList>

            </div>
        );
    }
}


export const indexPageQuery = graphql`
query IndexPageQuery{
    allCoursesJson {
      totalCount
      edges {
        node {
          id
          title
          flavors
          url
          authors {
            name
            picture
            bio
            title
          }
        }
      }
    }
  }
`;

