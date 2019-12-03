import * as React from "react";
import styled from 'styled-components';
import { Track } from "../../../domain/models";

interface TrackHeaderProps {
    track: Track;
    authorNames: string[];
    iconImgSrc: string;
    desc: string;
    onCTAClick: () => void;
}


const Row = styled.div`
margin: 0 auto;
max-width: 1100px;
width: 100%;

:before {
    content: " ";
    display: table;
}

:after {
    clear: both;
    content: " ";
    display: table;
}

@media only screen and (max-width: 1300px) and (min-width: 641px)
{
    max-width: 2000px;
    padding-left: 80px;
    padding-right: 80px;
}
`;

const TrackImg = styled.img`
display: inline-block;
vertical-align: middle;
margin-bottom: -110px;
margin-left: -90px;
max-width: 80px;

@media only screen and (max-width: 1300px)
{
margin-left: -66px;
max-width: 70px;
}

@media only screen and (max-width: 640px)
{
margin-left: 0;
margin-bottom: 15px;
max-width: 80px;
}
`;

const TrackTitleArea = styled.div`
@media only screen and (min-width: 64.0625em)
{
width: 58.33333%;
position: relative;
padding-left: 15px;
padding-right: 15px;
float: left;
}

@media only screen and (min-width: 40.0625em)
{
position: relative;
padding-left: 15px;
padding-right: 15px;
float: left;
}
`;

const TrackH4 = styled.h4`
text-transform: uppercase;
color: #fff;
font-size: 12px;
font-weight: 500;
margin-bottom: 6px;
`;

const TrackH1 = styled.h1`
font-weight: 500;
font-size: 30px;
color: #fff;
margin: 0;
line-height: 32px;
display: inline-block;
vertical-align: middle;
margin-bottom: 8px;

@media only screen and (max-width: 640px)
{
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 4px;
}
`;

const IntructorList = styled.p`
font-size: 12px;
font-weight: 500;
color: #aaa;
margin-bottom: 10px;
line-height: 14px;

@media only screen and (max-width: 640px)
{
    font-size: 11px;
    line-height: 14px;
}
`;

const TrackDesc = styled.p`
font-weight: 300;
color: #fbe4b6;
font-size: 15px;
line-height: 1.7em;
`;

const RelatedArea = styled.div`
padding-left: 60px;
padding-right: 0;

@media only screen and (min-width: 64.0625em)
{
width: 41.66667%;
}
@media only screen and (min-width: 64.0625em)
{
position: relative;
padding-left: 15px;
padding-right: 15px;
float: left;
}

@media only screen and (max-width: 1024px)
{
padding-left: 15px;
}

@media only screen and (max-width: 640px)
{
padding-left: 0;
}
`;

const RelatedH4 = styled.h4`
margin-top: 35px;
text-transform: uppercase;
color: #fff;
font-size: 12px;
font-weight: 500;
margin-bottom: 6px;
`;

const RelatedLinkSpan = styled.span`
border: 1px solid #555;
padding: 7px 15px;
border-radius: 30px;
background-color: #000;
font-weight: 500;
font-size: 12px;
line-height: 42px;
white-space: nowrap;
`;

const GetStartedWrapper = styled.div`
float: left;
position: relative;
padding-left: 15px;
padding-right: 15px;
width: 100%;
`;

const ActionButtonWrapper = styled.div`
width: 320px;
margin-top: 20px;

@media only screen and (max-width: 640px)
{
    text-align: center;
    display: inline-block;
}
`;

export default function TrackHeader(props: TrackHeaderProps) {

    const TracksHeader = styled.div`
        padding: 30px;
      
        background-image: url(/img/bg/track-${props.track.id}-bg.png);
        background-size: cover;
        background-repeat: no-repeat;

        @media only screen and (max-width: 640px)
        {
            text-align: center;
        }
    `;


    return (
        <TracksHeader>

            <Row>
                <TrackImg src={props.iconImgSrc} alt="JavaScript" />
            </Row>
            <Row>
                <TrackTitleArea>
                    <TrackH4>Track</TrackH4>
                    <TrackH1>{props.track.title}</TrackH1>
                    <IntructorList>Instructors:{' '}
                        {props.authorNames.join(', ')}
                    </IntructorList>
                    <div>
                        <TrackDesc>{props.desc}</TrackDesc>
                    </div>
                </TrackTitleArea>
                <RelatedArea style={{ display: 'none' }}>
                    <RelatedH4>Test</RelatedH4>
                    <p className="related-p">
                        <a href=""><RelatedLinkSpan>Web Developer</RelatedLinkSpan></a>

                    </p>
                </RelatedArea>
                <GetStartedWrapper>
                    <ActionButtonWrapper >
                        <div className="btn-action green">
                            <a onClick={() => props.onCTAClick()}>
                                <span className="action-text-full">Get Started</span>
                                <span className="action-text-medium">Get Started</span>
                                <span className="action-text-small">Get Started</span>
                            </a>
                        </div>
                    </ActionButtonWrapper>
                </GetStartedWrapper>
            </Row>



        </TracksHeader>
    );
}


