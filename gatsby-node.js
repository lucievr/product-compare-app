/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      // to create the page we need access to the product template
      const pageTemplate = path.resolve('src/components/product.js');
      
    resolve (
      graphql(
          `
            {
                allWomen {
                    edges {
                      node {
                        id
                        loc
                      }
                    }
                }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          result.data.allWomen.edges.forEach(({ node }) => {

            const path = node.loc;
  
            createPage({
              path,
              component: pageTemplate,
              context: {
                id: node.id,
              },
            });
            resolve();
          });
        })
        )
    });
  };