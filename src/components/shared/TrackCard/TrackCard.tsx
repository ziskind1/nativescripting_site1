import * as React from 'react';
import styled from 'styled-components';

interface TrackCardProps {
    imgSrc: string;
    title: string;
    link: string;
    bundleCount: number;
    courseCount: number;
}

const TrackCardWrapper = styled.a`
display: flex;
position: relative;
transition: transform .2s ease-in-out;
width: calc(33.33% - 2 * 30px/3)!important;
padding: 30px;
background-color: #0949b2;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin: 0px 10px 30px 10px;

:hover {
    transition-duration: 300ms;
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
}

@media only screen and (max-width: 1100px) and (min-width: 768px)
{
    width: calc(50% - 90px/2)!important;
}
@media only screen and (max-width: 767px)
{
    width: 100%!important;
}
`;

const TrackCardImg = styled.img`
height: 37px;
margin: 0 30px 0 0;
vertical-align: middle;
max-width: 100%;
display: inline-block;
border-radius: 0;
`;

const TrackTitle = styled.h2`
font-family: MonoRegular;
font-weight: 400;
font-size: 2rem;
letter-spacing: -2px;
margin-top: 2px;
margin-bottom: 5px;
position: relative;
line-height: 20px;
color: #12ffcd;
`;

const SubTitle = styled.p`
color: #0ec3db;
`;



export const TrackCard = (
    props: TrackCardProps
) => {



    return (

        <TrackCardWrapper href={props.link}>
            <TrackCardImg src={props.imgSrc} alt="NativeScript Angular Courses" /><div><TrackTitle>{props.title}</TrackTitle><SubTitle> {props.courseCount} courses <span>•</span> {props.bundleCount} bundles</SubTitle></div>
        </TrackCardWrapper>
    );
}
