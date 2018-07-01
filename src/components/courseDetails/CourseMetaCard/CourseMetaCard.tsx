import * as React from "react";
import { Course } from "../../../domain/models";
import { CourseAuthorsCard } from "../CourseAuthorsCard/CourseAuthorsCard";
import { CourseCoverage } from "../CourseCoverage/CourseCoverage";

import "./CourseMetaCard.css";

interface CourseMetaCardProps {
  course: Course;
}

export const CourseMetaCard: React.StatelessComponent<CourseMetaCardProps> = (
  props: CourseMetaCardProps
) => {
  const course = props.course;

  return (
    <div className="course-meta-card-container">
      <h2>About this course</h2>

      <CourseAuthorsCard authors={course.authors} />
      <CourseCoverage course={course} />
    </div>
  );
};
