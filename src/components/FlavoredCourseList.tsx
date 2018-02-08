import * as React from 'react';
import Link from 'gatsby-link';


const FlavoredCourseList: React.StatelessComponent<{ children: any, flavor: string, courses: any[] }> = ({ children, flavor, courses }) => {
    return (
        <div>
            <h2>{flavor}</h2>




        </div>
    );
};

export default FlavoredCourseList;
