import * as React from 'react';
import styled from 'styled-components';
import { TrackCardList } from '../../shared/TrackCard/TrackCardList';
import { Course, Track } from '../../../domain/models';


interface TrackSectionProps {
    courses: Course[];
    tracks: Track[];
    heading: string;
    subheading: string;
    disabled?: boolean;
}

const Section = styled.div`
background-color: #032E74;
padding-top: 20px;
padding-bottom: 20px;
`;
const HeadingWrapper = styled.div`
margin: 0 auto;
text-align: center;
`;

const Heading = styled.h2`
color: #11f5ff;
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


export const TrackSection: React.StatelessComponent<TrackSectionProps> = (
    props: TrackSectionProps
) => {

    const SectionWrapper = styled.div`
        display: ${props.disabled ? 'none' : 'block'}
    `;

    return (
        <Section>
            <SectionWrapper className="wrapper">
                <HeadingWrapper><Heading>{props.heading}</Heading><SubTitle>{props.subheading}</SubTitle></HeadingWrapper>

                <TrackCardList courses={props.courses} tracks={props.tracks}></TrackCardList>
            </SectionWrapper>
        </Section>
    );
}
