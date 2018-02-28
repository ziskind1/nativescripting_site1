import { MarkdownRemark } from "../graphql-types";
import { Post } from "../models/posts/post.model";
import { Author } from "../models";
import { notDeepEqual } from "assert";


export function postFromMarkdownRemark(node: MarkdownRemark, authors: Author[]): Post {
    return {
        title: node.frontmatter.title,
        excerpt: node.excerpt,
        path: node.frontmatter.path,
        body: node.html,
        updatedDate: node.frontmatter.updatedDate,
        timeLength: timeToReadToTimeLength(node.timeToRead),
        image: node.frontmatter.image,
        author: getAuthorByAuthorId(authors, node.frontmatter.author)
    };
}


function timeToReadToTimeLength(timeToRead: number): string {
    return `${timeToRead} minutes`;
}

function getAuthorByAuthorId(authors: Author[], id: string): Author {
    return authors.find(a => a.id === id);
}
