import * as React from 'react';
import Helmet from 'react-helmet';
import SiteConfig from '../../../../config/SiteConfig';

import { MarkdownRemark } from '../../../domain/graphql-types';
import { Post } from '../../../domain/models/posts/post.model';

interface SeoProps {
    postNode: MarkdownRemark;
    post: Post;
    postSeo: boolean;
}

export const Seo: React.SFC<SeoProps> = (props: SeoProps): JSX.Element => {
    const { postNode, post, postSeo } = props;
    const postPath = postNode.frontmatter.path;
    let title;
    let description;
    let image;
    let postURL;
    const realPrefix = SiteConfig.pathPrefix === '/' ? '' : SiteConfig.pathPrefix;

    if (postSeo) {
        const postMeta = postNode.frontmatter;
        title = postMeta.title;
        description = postNode.excerpt;
        image = postNode.frontmatter.image.childImageSharp.sizes.src;
        postURL = SiteConfig.siteUrl + realPrefix + postPath;
    } else {
        title = SiteConfig.siteTitle;
        description = SiteConfig.siteDescription;
        image = SiteConfig.siteBanner;
    }
    image = SiteConfig.siteUrl + realPrefix + image;
    const blogURL = SiteConfig.siteUrl + SiteConfig.pathPrefix;
    let schemaOrgJSONLD = [];

    schemaOrgJSONLD = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            '@id': blogURL,
            url: blogURL,
            name: title,
            alternateName: SiteConfig.siteTitleAlt ? SiteConfig.siteTitleAlt : '',
        },
    ];

    if (postSeo) {
        schemaOrgJSONLD = [
            {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                // @ts-ignore
                '@id': postURL,
                // @ts-ignore
                url: postURL,
                name: title,
                alternateName: SiteConfig.siteTitleAlt ? SiteConfig.siteTitleAlt : '',
                headline: title,
                image: {
                    '@type': 'ImageObject',
                    url: image,
                },
                description: SiteConfig.siteDescription,
                datePublished: postNode.frontmatter.createdDate,
                dateModified: postNode.frontmatter.updatedDate,
                author: {
                    '@type': 'Person',
                    name: post.author.twitter
                },
                publisher: {
                    '@type': 'Organization',
                    name: SiteConfig.author,
                    logo: {
                        '@type': 'ImageObject',
                        url: SiteConfig.siteUrl + realPrefix + SiteConfig.siteLogo,
                    },
                },
                isPartOf: blogURL,
                mainEntityOfPage: {
                    '@type': 'WebSite',
                    '@id': blogURL,
                },
            },
        ];
    }
    return (

        <Helmet
            htmlAttributes={{
                lang: SiteConfig.siteLanguage,
            }}
            title={title}

            meta={[
                {
                    content: description,
                    name: 'description',
                },
                {
                    content: title,
                    property: 'og:title',
                },
                {
                    content: description,
                    property: 'og:description',
                },
                {
                    content: 'website',
                    property: 'og:type',
                },
                {
                    content: 'summary',
                    name: 'twitter:card',
                },
                {
                    content: post.author.twitter ? `@${post.author.twitter}` : SiteConfig.userTwitter,
                    name: 'twitter:creator',
                },
                {
                    content: title,
                    name: 'twitter:title',
                },
                {
                    content: description,
                    name: 'twitter:description',
                },
                {
                    content: postSeo ? postURL : blogURL,
                    name: 'twitter:url',
                },
                {
                    content: image,
                    name: 'twitter:image',
                },
            ]}
        />

    );
};
