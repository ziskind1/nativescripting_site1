import * as React from "react";
import * as ReactDOM from 'react-dom';
import { CourseFlavorType, Course } from "../../domain/models";
import { CourseCard } from './CourseCard';

import './CourseCardList.css';

interface CourseCardListProps {
    courses: Course[];
}

let toId: number = -1;
const animTimeout = 800;

export class CourseCardList extends React.Component<CourseCardListProps, {}> {
    constructor(props: CourseCardListProps) {
        super(props);
    }

    public componentWillReceiveProps(newProps: CourseCardListProps) {
        const elem = ReactDOM.findDOMNode(this);

        if (toId !== -1) {
            clearTimeout(toId);
            elem.classList.remove('list-updated');
        }

        elem.classList.add('list-updated');

        toId = window.setTimeout(() => {
            elem.classList.remove('list-updated');
            toId = -1;
        }, animTimeout);
    }

    public render() {
        const coursesHtml = this.props.courses.map((course, idx) => {
            return <CourseCard key={idx} course={course} />
        });

        return (
            <div className="course-card-list">
                {coursesHtml}
            </div>
        );
    }
}
