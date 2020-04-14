import * as React from 'react';
import { graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import {
  AuthorsJsonConnection,
  CoursesJsonConnection,
  BundlesJsonConnection,
  TestimonialsJsonConnection,
  TracksJsonConnection
} from '../domain/graphql-types';

import {
  authorFromAuthorsJsonEdge,
  courseFromCoursesJsonEdge,
  testimonialFromTestimonialJsonEdge,
  trackFromTracksJsonEdge
} from '../domain/converters';

import Hero from '../components/home/Hero/Hero';
import { bundleFromBundlesJsonEdge } from '../domain/converters/bundle-types';

import BundleSection from '../components/home/BundleSection/BundleSection';
import CoursesSection from '../components/home/CoursesSection/CoursesSection';
import { CourseFilterType } from '../components/home/CourseFilter/CourseFilter';
import SubHeroSection from '../components/home/SubHeroSection/SubHeroSection';
import Benefits from '../components/home/Benefits/Benefits';
import Logos from '../components/home/Logos/Logos';

import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import AddThisBlock from '../components/shared/AddThisBlock/AddThisBlock';
import { scrollToElementById } from '../utils/scrolling';
import Testimonials from '../components/Testimonials/Testimonials';

import TrainingLink from '../components/home/TrainingLink/TrainingLink';
import { MainLayout } from '../layouts/MainLayout';
import { Course } from '../domain/models';
import { Seo } from '../components/shared/Seo/Seo';
import { TrackSection } from '../components/home/TrackSection/TrackSection';
import { BrandsSection } from '../components/shared/Brands/BrandsSection';

import SubHeroSection2 from '../components/home/SubHeroSection/SubHeroSection2';
import SubHeroSection3 from '../components/home/SubHeroSection/SubHeroSection3';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    authorsConnection: AuthorsJsonConnection;
    coursesConnection: CoursesJsonConnection;
    bundlesConnection: BundlesJsonConnection;
    tracksConnection: TracksJsonConnection;
    testimonialsConnection: TestimonialsJsonConnection;
  };
}

interface IndexPageState {
  courses: Course[];
  selectedFilterType: CourseFilterType;
}

export default class extends React.Component<IndexPageProps, IndexPageState> {
  constructor(props: IndexPageProps) {
    super(props);

    const authors = this.props.data.authorsConnection.edges.map(
      authorFromAuthorsJsonEdge
    );

    const courses = this.props.data.coursesConnection.edges.map(c =>
      courseFromCoursesJsonEdge(c, authors)
    );

    this.state = {
      courses: courses,
      selectedFilterType: 'All'
    };
  }

  public componentDidMount() {
    this.mountAddThis();
  }

  private mountAddThis() {
    const script = document.createElement('script');
    script.src = `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-597d29b3b4e298a5`;
    script.async = true;
    document.body.appendChild(script);
  }

  private allCoursesSelected() {
    this.scrollToElementById('courses');
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
        return this.state.courses.filter(c =>
          c.products.some(p => p.pricereg === 0)
        );
      case 'Core':
        return this.state.courses.filter(c => c.flavors.includes('Core'));
      case 'Angular':
        return this.state.courses.filter(c => c.flavors.includes('Angular'));
      case 'Vue':
        return this.state.courses.filter(c => c.flavors.includes('Vue'));
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
    const filteredCourses = this.getFilteredCourses(
      this.state.selectedFilterType
    );

    const bundles = this.props.data.bundlesConnection.edges.map(b =>
      bundleFromBundlesJsonEdge(b, this.state.courses)
    );

    const tracks = this.props.data.tracksConnection.edges.map(t =>
      trackFromTracksJsonEdge(t)
    );

    const testimonials = this.props.data.testimonialsConnection.edges.map(
      testimonialFromTestimonialJsonEdge
    );

    const pageTitle = `NativeScript Courses on NativeScripting`;

    return (
      <MainLayout>
        <Seo />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <CoursesSection
          courses={filteredCourses}
          selectedFilterType={this.state.selectedFilterType}
          onSelectFilterType={filterType => this.filterByFilterType(filterType)}
        />

        <Logos />

        <TrackSection
          disabled={false}
          courses={this.state.courses}
          tracks={tracks}
          heading="Or follow a learning track"
          subheading="Whether you want to learn the Core NativeScript framework, or you are already using a UI framework like Angular or Vue and want to leverage those UI frameworks with NativeScript, we've got you covered."
        />

        <SubHeroSection3 />

        <BrandsSection disabled={false} />

        <Benefits />

        <a id="courses" />

        <Testimonials testimonials={testimonials} />

        <TrackSection
          disabled={false}
          courses={this.state.courses}
          tracks={tracks}
          heading="Get started today"
          subheading="Choose your track and start learning"
        />

        <SignUpSection />

        <AddThisBlock />

        <div className="benefits" style={{ marginTop: '30px' }}>
          <TrainingLink />
        </div>
      </MainLayout>
    );
  }
}

export const coursesPageQuery = graphql`
  query CoursesPageQuery {
    #get authors
    authorsConnection: allAuthorsJson(filter: { types: { in: "course" } }) {
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
    coursesConnection: allCoursesJson(sort: { order: ASC, fields: [order] }) {
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
          order
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

    #get tracks
    tracksConnection: allTracksJson {
      totalCount
      edges {
        node {
          id
          title
          description
          bundles {
            id
            order
            description
          }
          levels {
            levelId
            title
            description
          }
        }
      }
    }

    #get testimonials
    testimonialsConnection: allTestimonialsJson(
      filter: { order: { lte: 6000 } }
    ) {
      totalCount
      edges {
        node {
          id
          name
          img
          twitter
          order
          quoteHtml
          titleHtml
        }
      }
    }
  }
`;
