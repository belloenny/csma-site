module.exports = {
  siteMetadata: {
    title: `CSMA`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Enny`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c3f48gs94a0i`,
        accessToken: `9G4IjjeWIiNTvandp1FneUIFe6lZSi-ueW7llPTTzyQ`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#e43812`,
        theme_color: `#e43812`,
        display: `minimal-ui`,
        icon: `src/images/newlogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}