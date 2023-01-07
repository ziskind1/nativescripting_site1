import * as React from 'react';
import styled from 'styled-components';

import { TrackCard } from './TrackCard';
import { Course, Bundle, Track } from '../../../domain/models';
import { checkPropTypes } from 'prop-types';

interface TrackCardListProps {
    courses: Course[];
    tracks: Track[];
}


const TrackCardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: flex-end;
margin-top: 40px;
`;


export const TrackCardList = (
    props: TrackCardListProps
) => {

    const numCoursesCore = props.courses.filter(c => c.flavors.includes('Core')).length;
    const numCoursesAngular = props.courses.filter(c => c.flavors.includes('Angular')).length;
    const numCoursesVue = props.courses.filter(c => c.flavors.includes('Vue')).length;

    const numBundlesCore = props.tracks.find(t => t.title.toLowerCase().includes('core')).bundles.length;
    const numBundlesAngular = props.tracks.find(t => t.title.toLowerCase().includes('angular')).bundles.length;
    const numBundlesVue = props.tracks.find(t => t.title.toLowerCase().includes('vue')).bundles.length;


    return (
        <TrackCardsContainer>
            <TrackCard title="NativeScript Core" link="/track/core" courseCount={numCoursesCore} bundleCount={numBundlesCore} imgSrc="/img/nativescript_white.svg" />
            <TrackCard title="NativeScript Angular" link="/track/angular" courseCount={numCoursesAngular} bundleCount={numBundlesAngular} imgSrc="/img/nativescript_angular.svg" />
            <TrackCard title="NativeScript Vue" link="/track/vue" courseCount={numCoursesVue} bundleCount={numBundlesVue} imgSrc="/img/nativescript_vue.svg" />
        </TrackCardsContainer>
    );
}
