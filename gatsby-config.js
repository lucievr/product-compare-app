const { firebase } = require('./config');
const firebaseConfig = {
  ...(process.env.NODE_ENV === 'development'
    ? require('./firebase-key.json')
    : {
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_id: process.env.FIREBASE_CLIENT_ID,
      }),
  ...firebase,
};

module.exports = {
  siteMetadata: {
    title: `Shoolix`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Lucie Vrsovska`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/public/static`,
      },
    },
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: firebaseConfig,
        databaseURL: "https://shoolix.firebaseio.com",
        types: [
          {
            type: 'Women',
            collection: 'ladies',
            map: doc => ({
              brand: doc.brand,
              buyURL: doc.buyURL,
              color: doc.color,
              imageURL: doc.imageURL,
              loc: doc.loc,
              name: doc.name,
              price: doc.price,
              type: doc.type,
            }),
          },
          {
            type: 'Men',
            collection: 'gents',
            map: doc => ({
              brand: doc.brand,
              buyURL: doc.buyURL,
              color: doc.color,
              imageURL: doc.imageURL,
              name: doc.name,
              price: doc.price,
              type: doc.type,
            }),
          },
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Men',
        imagePath: 'imageURL',
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
