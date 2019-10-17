import * as React from 'react';
import styled from 'styled-components';
import { TrackCardList } from '../../shared/TrackCard/TrackCardList';


interface TrackSectionProps {
    disabled?: boolean;
}

export const TrackSection: React.StatelessComponent<TrackSectionProps> = (
    props: TrackSectionProps
) => {

    const SectionWrapper = styled.div`
        display: ${props.disabled ? 'none' : 'block'}
    `;

    const HeadingWrapper = styled.div`
        margin: 0 auto;
        text-align: center;
    `;

    const Heading = styled.h2`
        letter-spacing: -2px;
        line-height: 46px;
        margin-bottom: 5px;
        font-size: 3.4rem;
        font-family: 'MonoRegular';

        @media only screen and (max-width: 1024px) and (min-width: 768px)
        {
            font-size: 2.8rem;
        }
        @media only screen and (max-width: 767px)
        {
            letter-spacing: 0px;
            font-size: 2.2rem;
        }
    `;

    const SubTitle = styled.p`
        max-width: 840px;
        margin: 10px auto 0;
        font-size: 1.8rem;
        line-height: 24px;
    `;


    return (
        <SectionWrapper className="wrapper">
            <div className="uc-section-row"><HeadingWrapper><Heading>Choose your NativeScript Track</Heading><SubTitle>Whether you want to learn the Core NativeScript framework, or you are already using a UI framework like Angular or Vue and want to leverage those UI frameworks with NativeScript, we've got you covered.</SubTitle></HeadingWrapper></div>

            <TrackCardList></TrackCardList>
        </SectionWrapper>
    );
}
