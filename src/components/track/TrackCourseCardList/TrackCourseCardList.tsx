import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CourseFlavorType, Course } from '../../../domain/models';
import { TrackCourseCard } from '../TrackCourseCard/TrackCourseCard';

// import './CourseCardList.css';


interface TrackCourseCardListProps {
    courses: Course[];
}

const TrackTiles = styled.div`
float: left;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const TrackCourseCardList = (
    props: TrackCourseCardListProps
) => {

    const coursesHtml = props.courses.map((course, idx) => {
        return <TrackCourseCard key={idx} course={course} />;
    });



    return (
        <TrackTiles>{coursesHtml}</TrackTiles>
    );
};
