import { Author } from "../author.model";
import { File as ImageFile } from "../../graphql-types";

export interface Post {
    title: string;
    excerpt: string;
    path: string;
    body: string;
    updatedDate: string;
    timeLength: string;
    author: Author;
    image: ImageFile;
}
