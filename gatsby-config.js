module.exports = {
  siteMetadata: {
    siteName: `NativeScripting`,
    siteUrl: `https://nativescripting.com`
  },
  plugins: [
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nativescripting.com`
      }
    },
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
