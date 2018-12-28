require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

const config = require('./config/SiteConfig').default;
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  siteMetadata: {
    siteName: `NativeScripting`,
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    // Add typescript stack into webpack
    'gatsby-plugin-styled-components',
    `gatsby-plugin-typescript`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
                {
                  site {
                    siteMetadata {
                      siteUrl
                    }
                  }
        
                  allSitePage {
                    edges {
                      node {
                        path
                      }
                    }
                  }
              }`
      }
    },

    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
