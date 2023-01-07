import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';
import { Course, Bundle } from '../domain/models';
import {
  authorFromAuthorsJsonEdge,
  courseFromCoursesJsonEdge,
  coursefromCoursesJson,
  testimonialFromTestimonialJsonEdge
} from '../domain/converters';
import { bundleFromBundlesJsonEdge } from '../domain/converters/bundle-types';

import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import { CourseBanner } from '../components/courseDetails/CourseBanner/CourseBanner';

import { CourseMetaCard } from '../components/courseDetails/CourseMetaCard/CourseMetaCard';

import { CoursePurchaseArea } from '../components/courseDetails/CoursePurchaseArea/CoursePurchaseArea';
import BundleSection from '../components/home/BundleSection/BundleSection';
import { CourseCurriculum } from '../components/courseDetails/CourseCurriculum/CourseCurriculum';

import '../css/course-details.css';
import Testimonials from '../components/Testimonials/Testimonials';

import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import AddThisBlock from '../components/shared/AddThisBlock/AddThisBlock';
import { GridRow } from '../layouts/grid2/grid-row';
import { GridColumn } from '../layouts/grid2/grid-column';
import TestimonialComponent from '../components/Testimonials/Testimonial';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

const TestimonialContainer = styled.div`
  margin-bottom: 50px;

  @media only screen and (max-width: 560px) {
  }
`;

interface CourseTemplateProps {
  data: {
    authorsConnection: Queries.AuthorsJsonConnection;
    coursesConnection: Queries.CoursesJsonConnection;
    bundlesConnection: Queries.BundlesJsonConnection;
    testimonialsConnection: Queries.TestimonialsJsonConnection;
    courseConnection: Queries.CoursesJson;
    previewsConnection: Queries.PreviewsJsonConnection;
  };
}

interface CourseTemplateState {
  course: Course;
  bundles: Bundle[];
}

class CourseTemplate extends React.Component<
  CourseTemplateProps,
  CourseTemplateState
> {
  constructor(props: CourseTemplateProps) {
    super(props);

    const authors = this.props.data.authorsConnection.edges.map(
      authorFromAuthorsJsonEdge
    );

    const courses = this.props.data.coursesConnection.edges.map(c =>
      courseFromCoursesJsonEdge(c, authors)
    );

    const coursePreviews = this.props.data.previewsConnection.nodes[0]
      .coursePreviews;
    const lessonPreviews = this.props.data.previewsConnection.nodes[0]
      .lessonPreviews;

    const theCourse = coursefromCoursesJson(
      this.props.data.courseConnection,
      authors,
      coursePreviews,
      lessonPreviews
    );

    this.state = {
      course: theCourse,
      bundles: this.props.data.bundlesConnection.edges.map(b =>
        bundleFromBundlesJsonEdge(b, courses)
      )
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

  private getNotesHtml(notes: string[]): JSX.Element {
    if (!notes || (notes && notes.length === 0)) {
      return null;
    }
    const notesHtml = notes.map((note, idx) => {
      return (
        <li key={idx}>
          <span>{note}</span>
        </li>
      );
    });
    return <ul>{notesHtml}</ul>;
  }

  public render() {
    const course = this.state.course;
    const title = this.props.data.courseConnection.title;
    const breadCrumbs = [
      { name: 'All courses', url: '/' },
      { name: 'Course details', url: '' }
    ];

    let notesHeader = null;
    const notesHtml = this.getNotesHtml(course.notes);
    if (notesHtml !== null) {
      notesHeader = <h2>Notes</h2>;
    }

    const testimonials = this.props.data.testimonialsConnection.edges.map(
      testimonialFromTestimonialJsonEdge
    );

    const pageTitle = `${course.title} | NativeScript Video Course`;

    let descHtml = (
      <div>
        <h2>What you'll learn</h2>
        <p>{course.description}</p>
      </div>
    );

    if (
      course.descriptionHtmlSections &&
      course.descriptionHtmlSections.length > 0
    ) {
      const descSections = course.descriptionHtmlSections.map((s, i) => {
        return (
          <div key={i}>
            <h2>{s.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: s.descriptionHtml }} />
          </div>
        );
      });
      descHtml = <div>{descSections}</div>;
    }

    const testimonialsHtml = testimonials.slice(0, 12).map((t, i) => {
      return (
        <TestimonialContainer className={i > 2 ? 'tc-more3' : ''} key={i}>
          <TestimonialComponent key={i} testimonial={t} />
        </TestimonialContainer>
      );
    });

    return (
      <MainLayout>
          
        <Seo course={course} courseSeo />
      {/*
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
    */}


        <div className="wrapper">
          <GridRow>
            <GridColumn>
              <CourseBanner course={course} />
            </GridColumn>
          </GridRow>

          <GridRow style={{ marginTop: 40, flexDirection: 'row-reverse' }}>
            <GridColumn xs={12} sm={4}>
              <CoursePurchaseArea course={course} />
              {testimonialsHtml}
            </GridColumn>
            <GridColumn xs={12} sm={8}>
              <CourseMetaCard course={course} />
              <div className="course-description-wrapper">
                {descHtml}
                {notesHeader}
                {notesHtml}
              </div>
              <CourseCurriculum course={course} />
            </GridColumn>
          </GridRow>

          <div className="course-details-container">
            <BundleSection
              bundles={this.state.bundles}
              bundlesTitle="Or pick up a complete bundle..."
              bundlesDesc="Everything you need to start mastering NativeScript today"
            />

            <SignUpSection />

            <AddThisBlock />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export const coursePageQuery = graphql`
  query CoursePageQuery($courseUrl: String) {
    #get authors
    authorsConnection: allAuthorsJson(filter: { contentTypes: { in: "course" } }) {
      totalCount
      edges {
        node {
          authorId
          title
          name
          picture
          bio
          biolong
          twitter
          github
          contentTypes
        }
      }
    }

    #get courses
    coursesConnection: allCoursesJson {
      totalCount
      edges {
        node {
          courseId
          title
          flavors
          url
          label
          authors
          level
          products {
            productId
            name
            description
            licensesMin
            licensesMax
            pricereg
            pricesale
            code
          }
        }
      }
    }

    #get bundles
    bundlesConnection: allBundlesJson {
      edges {
        node {
          bundleId
          title
          subtitle
          description
          url
          promototal
          promoremaining
          courseIds
          bundleLevel
          products {
            productId
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

    #get testimonials
    testimonialsConnection: allTestimonialsJson(
      filter: { order: { lte: 6000 } }
    ) {
      totalCount
      edges {
        node {
          testimonialId
          name
          img
          twitter
          order
          quoteHtml
          titleHtml
        }
      }
    }

    #get previews
    previewsConnection: allPreviewsJson {
      nodes {
        coursePreviews {
          courseId
          videoId
        }
        lessonPreviews {
          lessonId
          videoId
        }
      }
    }

    #get current course
    courseConnection: coursesJson(url: { eq: $courseUrl }) {
      courseId
      title
      subtitle
      description
      descriptionHtmlSections {
        title
        descriptionHtml
      }
      notes
      url
      flavors
      level
      label
      launchdate
      authors
      publishedChapters
      publishingSchedule {
        publishingScheduleItemId
        date
      }
      products {
        productId
        name
        description
        licensesMin
        licensesMax
        pricereg
        pricesale
        prodType
        numPayments
        recurring
        code
      }

      chapters {
        chapterId
        name
        lessons {
          chapterId
          lessonId
          name
          isPreview
        }
      }
    }
  }
`;

export default CourseTemplate;
