export type AuthorType = 'post' | 'course';

export function asAuthorType(stStr: AuthorType): AuthorType {
    return stStr;
}

export interface Author {
    id: string;
    name: string;
    picture: string;
    bio: string;
    title: string;
    types: AuthorType[];
}

export function toAuthor(
    id: string,
    name: string,
    picture: string,
    bio: string,
    title: string,
    types: AuthorType[],
): Author {
    return {
        id,
        name,
        picture,
        bio,
        title,
        types,
    }
}
