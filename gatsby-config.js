module.exports = {
    siteMetadata: {
        siteName: `Using Typescript Example!`,
        siteUrl: `https://nativescripting.com`
    },
    plugins: [
        // Add typescript stack into webpack
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
                ]
            }
        },


        // Parse all images files
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
}
