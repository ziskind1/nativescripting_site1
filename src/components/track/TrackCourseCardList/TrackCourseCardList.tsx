import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CourseFlavorType, Course } from '../../../domain/models';
import { TrackCourseCard } from '../TrackCourseCard/TrackCourseCard';

// import './CourseCardList.css';


interface TrackCourseCardListProps {
    courses: Course[];
}


export const TrackCourseCardList: React.StatelessComponent<TrackCourseCardListProps> = (
    props: TrackCourseCardListProps
) => {

    const coursesHtml = props.courses.map((course, idx) => {
        return <TrackCourseCard key={idx} course={course} />;
    });

    const TrackTiles = styled.div`
    float: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;

    return (
        <TrackTiles>{coursesHtml}</TrackTiles>
    );
};
