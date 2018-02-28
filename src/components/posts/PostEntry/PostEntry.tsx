import * as React from "react";
import Link from "gatsby-link";
let Image = require("gatsby-image").default;
import { Post } from "../../../domain/models/posts/post.model";
import { getAuthorImgSrc } from "../../../utils/urls";


interface PostEntryProps {
    post: Post
}

export const PostEntry: React.StatelessComponent<PostEntryProps> = (props: PostEntryProps) => {

    const post = props.post;


    let posterImage = null;
    if (post.image) {
        posterImage = <Image responsiveSizes={post.image.childImageSharp.responsiveSizes} />
    }


    const authorImgSrc = getAuthorImgSrc(post.author.picture);


    return (
        <div className="post-entry-container">
            <div className="post-header post-inner">

                <div className="post-meta-container">
                    <div className="post-meta-author-img-wrapper">
                        <img src={authorImgSrc} />
                    </div>
                    <div className="post-meta-info-wrapper">
                        <div>
                            <span className="post-meta-author-name">{post.author.name}</span>
                        </div>
                        <div>
                            <span className="post-meta-author-title">{post.author.title}</span>
                        </div>
                        <div className="post-meta-date-time-wrapper">
                            <span>{post.updatedDate}</span>
                            <span className="middot-divider"></span>
                            <span>{post.timeLength}</span>
                        </div>
                    </div>
                </div>

                <h1>{post.title}</h1>
                <p className="post-excerpt">
                    {post.excerpt}
                </p>
            </div>


            {posterImage}


            <div className="post-body">
                <div className="post-inner">
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />

                    <div className="section-divider"><hr className="section-divider" /></div>

                    <div>
                        <i>{post.author.bio}</i>
                    </div>
                </div>
            </div>
        </div>
    );
};
