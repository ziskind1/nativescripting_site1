import * as React from 'react';
import { Author } from '../../../domain/models';


import './CourseAuthorCard.css';

interface CourseAuthorCardProps {
    author: Author;
}

export const CourseAuthorCard = (props: CourseAuthorCardProps) => {

    const author = props.author;
    const authorImgSrc = `/img/authors/${author.picture}`;

    return (
        <div className="course-author-card-container">
            <p className="card-label">Author</p>
            <div className="course-author-name-block">
                <div>
                    <h3>{author.name}</h3>
                    <h4>{author.title}</h4>
                </div>
                <div>
                    <img alt={author.name} src={authorImgSrc} title={author.name} />
                </div>
            </div>

            <p className="card-bio">{author.bio}</p>

        </div>
    );
};
