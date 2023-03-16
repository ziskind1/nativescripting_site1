import * as React from 'react';
import styled from 'styled-components';

import { Course } from '../../../domain/models';
import { CourseAuthorsCard } from '../CourseAuthorsCard/CourseAuthorsCard';
import { CourseCoverage } from '../CourseCoverage/CourseCoverage';

import './CourseMetaCard.css';
import { VideoPlayer } from '../../shared/VideoPlayer/VideoPlayer';

interface CourseMetaCardProps {
  course: Course;
}

const VideoPlayerContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CourseMetaCard = (
  props: CourseMetaCardProps
) => {
  const course = props.course;

  let vidSection = null;
  if (course.previewVideoId) {
    vidSection = (
      <VideoPlayerContainer>
        <VideoPlayer videoId={course.previewVideoId} />
      </VideoPlayerContainer>
    );
  }

  return (
    <div className="course-meta-card-container">
      <h2>About this course</h2>

      {vidSection}

      <CourseAuthorsCard authors={course.authors} />
      <CourseCoverage course={course} />
    </div>
  );
};
