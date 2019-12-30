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

import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import AddThisBlock from '../components/shared/AddThisBlock/AddThisBlock';
import TrackHeader from '../components/track/TrackHeader/TrackHeader';
import Collapsible from "../components/shared/Collapsible/Collapsible";
import { TrackCourseCardList } from "../components/track/TrackCourseCardList/TrackCourseCardList";
import { scrollToElementById } from '../utils/scrolling';
import { BrandsSection } from '../components/shared/Brands/BrandsSection';


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

const TrackLevelDescriptionWrapper = styled.div`
position: relative;
padding-left: 15px;
padding-right: 15px;

`;

const TrackLevelDescription = styled.p`
color: #fbe4b6;
font-size: 15px;
line-height: 1.7em;
font-weight: 400;
margin-bottom: 20px;
text-rendering: optimizeLegibility;
`;

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

    private onCTAClick() {

        scrollToElementById('bundles');

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

        const allBundles = this.props.data.bundlesConnection.edges.map(b =>
            bundleFromBundlesJsonEdge(b, this.state.courses)
        );

        const trackBundleIds = track.bundles.map(b => b.bundleId);

        const trackBundles = allBundles.filter(b => trackBundleIds.includes(b.id));

        const pageTitle = `${track.title} Track | NativeScripting`;
        const levels = this.getLevelsHtml(track);
        const authorNames = this.getAuthorNames();


        return (
            <MainLayout>
                <Seo />
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>


                <TrackHeader
                    track={track}
                    authorNames={authorNames}
                    iconImgSrc={track.imgSrc}
                    desc={track.description}
                    onCTAClick={() => this.onCTAClick()}
                />

                {levels}

                <a id="bundles" />

                <BundleSection bundles={trackBundles} bundlesTitle={`Master ${track.title}`} bundlesDesc="Join over 20,000 others who have fast-tracked their skills to get jobs at top companies." bg="#032E74" />

                <BrandsSection disabled={false} />

                <Testimonials testimonials={testimonials} />

                <BundleSection bundles={trackBundles} bundlesTitle="Become a NativeScript Expert" bundlesDesc="Everything you need to know to master NativeScript today." bg="#032E74" />



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

    #get testimonials
    testimonialsConnection: allTestimonialsJson(filter: {order: {lte: 6000}}) {
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
        bundles {
            id
            order
            description
        }
    }
  }
`;

export default TrackTemplate;
