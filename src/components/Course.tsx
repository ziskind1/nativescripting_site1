import * as React from 'react';
import Link from 'gatsby-link';


const Course: React.StatelessComponent<{ children: any, courseName: string, to: string }> = ({ children, courseName, to }) => {
    return (
        <div>
            <h2>{courseName}</h2>

            <Link to={to}>
                {children}
            </Link>
        </div>
    );
};

export default Course;
