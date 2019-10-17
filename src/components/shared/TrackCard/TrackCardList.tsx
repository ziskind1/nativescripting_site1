import * as React from 'react';
import styled from 'styled-components';

import { TrackCard } from './TrackCard';

interface TrackCardListProps {

}

export const TrackCardList: React.StatelessComponent<TrackCardListProps> = (
    props: TrackCardListProps
) => {

    const TrackCardsContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-end;
        margin-top: 40px;
    `;

    return (
        <TrackCardsContainer>
            <TrackCard title="NativeScript Core" link="/track/core" courseCount={3} bundleCount={1} imgSrc="/img/nativescript_white.svg" />
            <TrackCard title="NativeScript Angular" link="/track/angular" courseCount={3} bundleCount={1} imgSrc="/img/nativescript_angular.svg" />
            <TrackCard title="NativeScript Vue" link="/track/vue" courseCount={3} bundleCount={1} imgSrc="/img/nativescript_vue.svg" />
        </TrackCardsContainer>
    );
}
