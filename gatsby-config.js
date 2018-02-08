module.exports = {
    siteMetadata: {
        siteName: `Using Typescript Example!`,
        foo: 'bar'
    },
    plugins: [
        // Add typescript stack into webpack
        `gatsby-plugin-typescript`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,

        // Expose `/data` to graphQL layer
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`
            }
        },
        /*
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
            },
        }, 
      
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
            },
        }, 
         */
    ],
}
