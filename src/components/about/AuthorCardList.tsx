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
        <div className="about-authors-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-padding top-text-block">
                        <h2>Authors</h2>

                        <div className="about-authors-wrapper">
                            {html}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
