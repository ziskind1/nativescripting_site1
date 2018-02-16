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
import { CourseFilterType } from "../components/home/CourseFilter/CourseFilter";
import SubHeroSection from "../components/home/SubHeroSection/SubHeroSection";
import Benefits from "../components/home/Benefits/Benefits";
import Logos from "../components/home/Logos/Logos";
import { scrollToElementById } from "../utils/scrolling";

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
    courses: Course[];
    selectedFilterType: CourseFilterType;
}

export default class extends React.Component<IndexPageProps, IndexPageState> {

    constructor(props: IndexPageProps) {
        super(props);

        const authors =
            this.props.data.authorsConnection.edges.map(authorFromAuthorsJsonEdge);

        const courses =
            this.props.data.coursesConnection.edges.map(c => courseFromCoursesJsonEdge(c, authors));


        this.state = {
            courses: courses,
            selectedFilterType: 'All'
        };
    }

    private freeCoursesSelected() {
        this.setState({ selectedFilterType: 'Free' }, () => {
            this.scrollToElementById('courses');
        });
    }

    private premiumCoursesSelected() {
        this.setState({ selectedFilterType: 'All' }, () => {
            this.scrollToElementById('courses');
        });
    }

    private scrollToElementById(id: string) {
        scrollToElementById(id);
    }

    private filterByFilterType(filterType: CourseFilterType) {
        this.setState({ selectedFilterType: filterType });
    }

    private getFilteredCourses(filterType: CourseFilterType): Course[] {
        switch (filterType) {
            case 'All':
                return this.state.courses;
            case 'Free':
                return this.state.courses.filter(c => c.products.some(p => p.pricereg === 0));
            case 'Core':
                return this.state.courses.filter(c => c.flavors.includes('Core'));
            case 'Angular':
                return this.state.courses.filter(c => c.flavors.includes('Angular'));
            default:
                return this.state.courses;
        }

        /*
        if (this.state.selectedFlavor === undefined) {
            return this.state.courses;
        } else {
            return this.state.courses.filter(c => c.flavors.includes(this.state.selectedFlavor));
        }
        */
    }

    public render() {
        const filteredCourses = this.getFilteredCourses(this.state.selectedFilterType);

        const bundles =
            this.props.data.bundlesConnection.edges.map(b => bundleFromBundlesJsonEdge(b, this.state.courses));

        return (
            <div>
                <Hero />
                <SubHeroSection
                    onFreeCoursesClick={() => this.freeCoursesSelected()}
                    onPremiumCoursesClick={() => this.premiumCoursesSelected()}
                />

                <Logos />
                <Benefits />

                <a id="courses" name="courses"></a>
                <CoursesSection
                    courses={filteredCourses}
                    selectedFilterType={this.state.selectedFilterType}
                    onSelectFilterType={(filterType) => this.filterByFilterType(filterType)}
                />

                <BundleSection bundles={bundles} />

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
            bundleLevel
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

