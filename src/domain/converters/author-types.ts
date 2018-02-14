import { defaultArray } from '../core';
import { AuthorsJsonEdge } from '../graphql-types';
import { Author, asAuthorType } from '../models';


export function authorFromAuthorsJsonEdge(edge: AuthorsJsonEdge): Author {
    const n = edge.node;
    return {
        id: n.id,
        name: n.name,
        title: n.title,
        bio: n.bio,
        biolong: n.biolong,
        picture: n.picture,
        twitter: n.twitter,
        github: n.github,
        types: defaultArray(n.types).map(asAuthorType)
    };
}
