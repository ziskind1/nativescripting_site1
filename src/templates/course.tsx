import * as React from 'react';
import Link from 'gatsby-link';
import {
  CoursesJson,
  AuthorsJsonConnection,
  CoursesJsonConnection,
  BundlesJsonConnection
} from '../domain/graphql-types';

import NsLink from '../components/NsLink';
import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';
import { Course, Bundle } from '../domain/models';
import { authorFromAuthorsJsonEdge, courseFromCoursesJsonEdge, coursefromCoursesJson } from '../domain/converters';
import { bundleFromBundlesJsonEdge } from '../domain/converters/bundle-types';
import { CourseMeta } from '../components/courseDetails/CourseMeta/CourseMeta';
import { CourseDetailsBody } from '../components/courseDetails/CourseDetailsBody/CourseDetailsBody';
import Quotes from '../components/Quotes/Quotes';
import SignUpSection from '../components/shared/SignUpSection/SignUpSection';
import { CourseBanner } from '../components/courseDetails/CourseBanner/CourseBanner';

import '../css/course-details.css';
import { CourseMetaCard } from '../components/courseDetails/CourseMetaCard/CourseMetaCard';
import { CourseBundleArea } from '../components/courseDetails/CourseBundleArea/CourseBundleArea';
import { CoursePurchaseArea } from '../components/courseDetails/CoursePurchaseArea/CoursePurchaseArea';
import BundleSection from '../components/home/BundleSection/BundleSection';
import { CourseCurriculum } from '../components/courseDetails/CourseCurriculum/CourseCurriculum';


// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

interface CourseTemplateProps {
  data: {
    authorsConnection: AuthorsJsonConnection,
    coursesConnection: CoursesJsonConnection,
    bundlesConnection: BundlesJsonConnection,
    courseConnection: CoursesJson
  }
}

interface CourseTemplateState {
  course: Course;
  bundles: Bundle[];
}


class CourseTemplate extends React.Component<CourseTemplateProps, CourseTemplateState> {

  constructor(props: CourseTemplateProps) {
    super(props);

    const authors =
      this.props.data.authorsConnection.edges.map(authorFromAuthorsJsonEdge);

    const courses =
      this.props.data.coursesConnection.edges.map(c => courseFromCoursesJsonEdge(c, authors));

    this.state = {
      course: coursefromCoursesJson(this.props.data.courseConnection, authors),
      bundles: this.props.data.bundlesConnection.edges.map(b => bundleFromBundlesJsonEdge(b, courses))
    };
  }


  public render() {

    const course = this.state.course;
    const title = this.props.data.courseConnection.title;
    const breadCrumbs = [{ name: 'All courses', url: '/' }, { name: 'Course details', url: '' }];

    return (
      <div className="wrapper">
        <div className="course-details-container">

          <div className="course-details-top-bar">
            <BreadCrumbs breadcrumbs={breadCrumbs} />
          </div>

          <CourseBanner course={course} />


          <div className="course-details-wrapper">
            <div className="course-details-pane">
              <CourseMetaCard course={course} />
            </div>

            <div className="course-details-pane">
              <CoursePurchaseArea course={course} />
            </div>
          </div>

          <div className="course-description-wrapper">
            <h2>What you'll learn</h2>
            <p>
              {course.description}
            </p>
          </div>


          <CourseCurriculum course={course} />

          <Quotes />

          <BundleSection bundles={this.state.bundles} />

          <SignUpSection />


        </div >
      </div >
    );
  }

}

export const coursePageQuery = graphql`
query CoursePageQuery($courseUrl: String) {

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

#get current course
  courseConnection: coursesJson(url: {eq: $courseUrl}) {
          id
      title
        subtitle
        description
        url
        flavors
        level
        label
        launchdate
        authors
        products {
          id
            name
        description
        licensesMin
        licensesMax
        pricereg
        pricesale
      }
        chapters {
          id
          name
          lessons {
            chapterId
            id
            name
            isPreview
          }
    }
  }
}
`


export default CourseTemplate;
