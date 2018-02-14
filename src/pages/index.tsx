import * as React from "react";
import Link from "gatsby-link";

import {
    AuthorsJsonConnection,
    CoursesJsonConnection,
    CoursesJsonEdge,
    BundlesJsonConnection
} from "../domain/graphql-types";

import { authorFromAuthorsJsonEdge, courseFromCoursesJsonEdge } from '../domain/converters';
import { Course, CourseFlavorType } from "../domain/models";

import Hero from '../components/home/Hero/Hero';
import { FlavorSelector } from "../components/FlavorSelector";
import FlavorDescription from "../components/FlavorDescription";
import HomeSpecialsSection from "../components/home/HomeSpecialsSection";
import { bundleFromBundlesJsonEdge } from "../domain/converters/bundle-types";
import ActionButton from "../components/ActionButton/ActionButton";
import BundleSection from "../components/home/BundleSection/BundleSection";
import CoursesSection from "../components/home/CoursesSection/CoursesSection";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
    data: {
        authorsConnection: AuthorsJsonConnection,
        coursesConnection: CoursesJsonConnection,
        bundlesConnection: BundlesJsonConnection
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

        const filteredCourses = this.getFilteredCourses();

        const bundles =
            this.props.data.bundlesConnection.edges.map(b => bundleFromBundlesJsonEdge(b, this.state.courses));

        const clearStyle = {
            clear: 'both'
        };


        return (
            <div>
                <Hero />

                <CoursesSection courses={filteredCourses} selectedFlavor={this.state.slectedFlavor} onSelectFlavor={(flavor) => this.filterByFlavor(flavor)} />

                <div style={clearStyle} ></div>

                <BundleSection bundles={bundles} />

                <div style={clearStyle} ></div>

                <HomeSpecialsSection bundles={bundles} />

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

    #get bundles
    bundlesConnection: allBundlesJson {
        edges {
          node {
            id
            title
            subtitle
            description
            url
            promototal
            promoremaining
            courseIds
            products {
              id
              name
              description
              pricesale
              pricereg
              licensesMin
              licensesMax
            }
          }
        }
      }
  }
`;

