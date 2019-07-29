import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

const GentsPage = () => { 
  return (
    <StaticQuery
      query={graphql`
        query ShoolixMenQuery {
          allMen {
            edges {
              node {
                id
                name
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
      `}
      render={({ allMen }) => {
      
      return (
        <>
          <SEO title="Men Shoes" />
          <Global styles={GlobalStyles} />
         
         <div className ="div--card">
          {allMen.edges.map(({ node }) => (
            <div className="card--gents"
           >
            <h2 className="gents">{node.brand} {node.name}</h2>
            <ul key={node.id} className="div--product">
              <li>
                <span className="product--desc">Brand:</span> {node.brand}
              </li>
              <li>
                <span className="product--desc">Color:</span> {node.color}
              </li>
              <li>
                <span className="product--desc">Type:</span> {node.type}
              </li>
              <li>
                <span className="product--desc">Price:</span> € {node.price}
              </li>
            </ul>
            <div>
                <Img fluid={node.localImage.childImageSharp.fluid} className="image--product" />
              </div>
            <hr className="gents" />
            <a href={node.buyURL} className="gents">BUY HERE</a>
          </div>
          ))}
          </div>
          <Link to="/">Go back to the homepage</Link>
        </>
      )}}
    />
  )
}

export default GentsPage


// {
//     allMen(filter: { brand: { eq: "Adidas" } }) {
//       edges {
//         node {
//           id
//           name
//           type
//           color
//           price
//         }
//       }
//     }
//   }
