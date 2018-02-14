import * as React from "react";
import Link from "gatsby-link";

import {
    AuthorsJsonConnection,
    CoursesJsonConnection,
    CoursesJsonEdge
} from "../domain/graphql-types";

import { authorFromAuthorsJsonEdge, courseFromCoursesJsonEdge } from '../domain/converters';
import { Course, CourseFlavorType } from "../domain/models";

import Hero from '../components/Hero';
import { FlavorSelector } from "../components/FlavorSelector";
import { CourseCardList } from "../components/CourseCardList";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
    data: {
        authorsConnection: AuthorsJsonConnection,
        coursesConnection: CoursesJsonConnection
    }
}

interface IndexPageState {
    slectedFlavor?: CourseFlavorType;
    courses: Course[];
}

export default class extends React.Component<IndexPageProps, IndexPageState> {

    constructor(props: IndexPageProps) {
        super(props);

        const authors =
            this.props.data.authorsConnection.edges.map(authorFromAuthorsJsonEdge);

        const courses =
            this.props.data.coursesConnection.edges.map(c => courseFromCoursesJsonEdge(c, authors));

        this.state = {
            courses: courses
        };
    }


    private filterByFlavor(flavor: CourseFlavorType) {
        this.setState({ slectedFlavor: flavor });
    }

    private getFilteredCourses(): Course[] {
        if (this.state.slectedFlavor === undefined) {
            return this.state.courses;
        } else {
            return this.state.courses.filter(c => c.flavors.includes(this.state.slectedFlavor));
        }
    }

    public render() {

        const courses = this.getFilteredCourses();

        return (
            <div>
                <Hero />

                <FlavorSelector onSelectFlavor={(flavor) => this.filterByFlavor(flavor)} />

                <CourseCardList courses={courses} />

            </div>
        );
    }
}


export const indexPageQuery = graphql`
query IndexPageQuery{

    #get authors
    authorsConnection: allAuthorsJson(filter: {types: { in: "course" } }) {
        totalCount
        edges {
          node {
            id
            title
            name
            picture
            bio
            biolong
            twitter
            github
          }
        }
      }

    #get courses
    coursesConnection: allCoursesJson {
      totalCount
      edges {
        node {
          id
          title
          flavors
          url
          label
          authors
          level
          products {
            id
            name
            description
            licensesMin
            licensesMax
            pricereg
            pricesale
          }
        }
      }
    }
  }
`;

