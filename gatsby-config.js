module.exports = {
  siteMetadata: {
    title: `Product Compare app`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Lucie Vrsovska`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `./public/static`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase-key.json"),
        databaseURL: "https://shoolix.firebaseio.com",
        types: [
          {
            type: 'Women',
            collection: 'ladies',
            map: doc => ({
              name: doc.name,
              brand: doc.brand,
              type: doc.type,
              price: doc.price,
              imageURL: doc.imageURL,
            }),
          },
          // {
          //   type: 'Men',
          //   collection: 'gents',
          //   map: doc => ({
          //     name: doc.name,
          //     brand: doc.brand,
          //     type: doc.type,
          //     price: doc.price,
          //   }),
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Women',
        imagePath: 'imageURL',
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
