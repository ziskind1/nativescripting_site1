export type AuthorType = 'post' | 'course';

export function asAuthorType(stStr: AuthorType): AuthorType {
    return stStr;
}

export interface Author {
    id: string;
    name: string;
    picture: string;
    bio: string;
    biolong: string;
    title: string;
    twitter: string;
    github: string;
    types: AuthorType[];
}

export function toAuthor(
    id: string,
    name: string,
    picture: string,
    bio: string,
    biolong: string,
    title: string,
    twitter: string,
    github: string,
    types: AuthorType[],
): Author {
    return {
        id,
        name,
        picture,
        bio,
        biolong,
        title,
        twitter,
        github,
        types,
    }
}
