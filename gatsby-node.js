/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

const slash = require('slash')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve('src/components/product.js')

  return graphql(`
    {
    allWomen {
            edges {
              node {
                id
                name
                loc
                brand
                type
                price
                buyURL
                color
                imageURL
                localImage {
                  id
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
        }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allWomen.edges.forEach(({ node }) => {
      createPage({
        path: node.loc,
        component: slash(productTemplate),
        context: {
          id: node.id
        }
      })
    })
  })
}