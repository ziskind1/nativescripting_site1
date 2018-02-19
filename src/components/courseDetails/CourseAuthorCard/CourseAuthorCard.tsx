import * as React from 'react';
import { Author } from '../../../domain/models';


interface CourseAuthorCardProps {
    author: Author;
}

export const CourseAuthorCard: React.StatelessComponent<CourseAuthorCardProps> = (props: CourseAuthorCardProps) => {

    const author = props.author;
    const authorImgSrc = `/img/authors/${author.picture}`;

    return (
        <div>
            <p>Author</p>
            <h3>{author.name}</h3>
            <h4>{author.title}</h4>

            <img src={authorImgSrc} alt={author.name} title={author.name} />

            <p>{author.bio}</p>

        </div>
    );
};
