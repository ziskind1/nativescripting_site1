import * as React from 'react';
import { Link } from 'gatsby';

type CourseProps = {
  children: any;
  courseName: string;
  to: string;
};

const Course = ({ children, courseName, to }: CourseProps ) => {
  return (
    <div>
      <h2>{courseName}</h2>

      <Link to={to}>{children}</Link>
    </div>
  );
};

export default Course;
