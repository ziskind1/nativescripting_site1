import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

import {
    TracksJson,
    AuthorsJsonConnection,
    TracksJsonConnection,
    BundlesJsonConnection,
    TestimonialsJsonConnection,
    CoursesJson,
    CoursesJsonConnection
} from '../domain/graphql-types';

import { BreadCrumbs } from '../components/shared/BreadCrumbs/BreadCrumbs';
import { Track, Bundle, Course, CourseLevelType, TrackLevel } from '../domain/models';
import {
    authorFromAuthorsJsonEdge,
    trackFromTracksJsonEdge,
    trackFromTracksJson,
    testimonialFromTestimonialJsonEdge,
    courseFromCoursesJsonEdge
} from '../domain/converters';
import { bundleFromBundlesJsonEdge } from '../domain/converters/bundle-types';

import SignUpSection from '../components/shared/SignUpSection/SignUpSection';


import BundleSection from '../components/home/BundleSection/BundleSection';
import { CourseFilterType } from "../components/home/CourseFilter/CourseFilter";


// import '../css/track-details.css';
import Testimonials from '../components/Testimonials/Testimonials';
import CountdownTimer from '../components/shared/CountdownTimer/CountdownTimer';
import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import AddThisBlock from '../components/shared/AddThisBlock/AddThisBlock';
import TrackHeader from '../components/track/TrackHeader/TrackHeader';
import Collapsible from "../components/shared/Collapsible/Collapsible";
import { TrackCourseCardList } from "../components/track/TrackCourseCardList/TrackCourseCardList";


// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

interface TrackTemplateProps {
    data: {
        authorsConnection: AuthorsJsonConnection;
        coursesConnection: CoursesJsonConnection;
        tracksConnection: TracksJsonConnection;
        bundlesConnection: BundlesJsonConnection;
        testimonialsConnection: TestimonialsJsonConnection;
        trackConnection: TracksJson;
    };
}

interface TrackTemplateState {
    track: Track;
    courses: Course[];
    //bundles: Bundle[];
}

class TrackTemplate extends React.Component<
    TrackTemplateProps,
    TrackTemplateState
    > {
    constructor(props: TrackTemplateProps) {
        super(props);

        const authors = this.props.data.authorsConnection.edges.map(
            authorFromAuthorsJsonEdge
        );

        const courses = this.props.data.coursesConnection.edges.map(c =>
            courseFromCoursesJsonEdge(c, authors)
        );

        const tracks = this.props.data.tracksConnection.edges.map(c =>
            trackFromTracksJsonEdge(c)
        );

        this.state = {
            track: trackFromTracksJson(this.props.data.trackConnection),
            courses: courses
            //bundles: this.props.data.bundlesConnection.edges.map(b =>
            //    bundleFromBundlesJsonEdge(b, tracks)
            //)
        };
    }

    public componentDidMount() {
        this.mountAddThis();
    }

    private mountAddThis() {
        const script = document.createElement("script");
        script.src =
            `//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-597d29b3b4e298a5`;
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

    private getFilteredCourses(levelName: string, level: CourseLevelType): Course[] {
        const coursesFlavor: Course[] = [];
        switch (levelName) {
            case 'core':
                coursesFlavor.push(...this.state.courses.filter(c => c.flavors.includes('Core')));
                break;
            case 'angular':
                coursesFlavor.push(...this.state.courses.filter(c => c.flavors.includes('Angular')));
                break;
            case 'vue':
                coursesFlavor.push(...this.state.courses.filter(c => c.flavors.includes('Vue')));
                break;
        }
        return coursesFlavor.filter(c => c.level.levelId === level);
    }

    private getAuthorNames() {
        const nameArrs = this.state.courses.map(c => c.authors.map(a => a.name));
        const names = nameArrs.reduce((prev, cur) => prev.concat(cur));

        const filtered = names.filter((name, index, arr) => {
            return arr.indexOf(name) === index;
        });
        return filtered;
    }

    private getLevelsHtml(track: Track): JSX.Element {
        const levels = track.levels;
        if (!levels || (levels && levels.length === 0)) {
            return null;
        }

        const TrackLevelDescriptionWrapper = styled.div`
            position: relative;
            padding-left: 15px;
            padding-right: 15px;
            float: left;
        `;

        const TrackLevelDescription = styled.p`
            color: #858585;
            font-size: 15px;
            line-height: 1.7em;
            font-weight: 400;
            margin-bottom: 20px;
            text-rendering: optimizeLegibility;
        `;

        const html = levels.map((level, idx) => {

            const courses = this.getFilteredCourses(track.id, level.levelId);

            return (
                <Collapsible title={level.levelName} key={idx}>
                    <TrackLevelDescriptionWrapper>
                        <TrackLevelDescription>{level.levelDescription}</TrackLevelDescription>
                    </TrackLevelDescriptionWrapper>
                    <TrackCourseCardList courses={courses} />
                </Collapsible>
            );
        });
        return <>{html}</>;
    }


    public render() {

        const track = this.state.track;

        const breadCrumbs = [
            { name: 'All tracks', url: '/' },
            { name: 'Track details', url: '' }
        ];



        const testimonials = this.props.data.testimonialsConnection.edges.map(
            testimonialFromTestimonialJsonEdge
        );

        const pageTitle = `${track.title} Track | NativeScripting`;

        const levels = this.getLevelsHtml(track);

        const coursesBeginner = this.getFilteredCourses('Angular', 1);
        const coursesIntermediate = this.getFilteredCourses('Angular', 2);
        const coursesAdvanced = this.getFilteredCourses('Angular', 3);

        const authorNames = this.getAuthorNames();





        return (
            <MainLayout>
                <Seo />
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>

                <CountdownTimer />

                <TrackHeader track={track} authorNames={authorNames} iconImgSrc={track.imgSrc} desc={track.description} />

                {levels}

                <Testimonials testimonials={testimonials} />


                <SignUpSection />

                <AddThisBlock />

            </MainLayout>
        );
    }
}

export const trackPageQuery = graphql`
  query TrackPageQuery($trackId: String) {
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
    coursesConnection: allCoursesJson(sort: {order: ASC, fields: [order] }) {
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

    #get testimonials
    testimonialsConnection: allTestimonialsJson {
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

    #get tracks
    tracksConnection: allTracksJson {
      totalCount
      edges {
        node {
          id
          levels {
            levelId
            title
            description
          }
        }
      }
    }

    #get current track
    trackConnection: tracksJson(id: { eq: $trackId }) {
        id
        title
        description
        imageSrc
        levels {
          levelId
          title
          description
        }
    }
  }
`;

export default TrackTemplate;
