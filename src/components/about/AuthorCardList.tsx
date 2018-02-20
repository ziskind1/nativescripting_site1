import * as React from "react";
import { CourseFlavorType, Author } from "../../domain/models";
import { AuthorCard } from './AuthorCard';

interface AuthorCardListProps {
    authors: Author[];
}

export const AuthorCardList: React.StatelessComponent<AuthorCardListProps> = (props: AuthorCardListProps) => {


    const html = props.authors.map((author, idx) => {
        return <AuthorCard key={idx} author={author} />
    });

    return (
        <div className="wrapper">
            <div className="about-authors-container">

                <div className="">
                    <h2>Authors</h2>

                    <div className="about-authors-wrapper">
                        {html}
                    </div>
                </div>

            </div>
        </div>
    );
};
