import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"

import { Card } from 'react-materialize'

const LadiesPage = () => (
  <StaticQuery
    query={graphql`
      query ShoolixWomQuery {
        allWomen {
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
    render={({ allWomen }) => (
      <>
        <SEO title="Women Shoes" />
        <Global styles={GlobalStyles} />
       <div className ="div--card">
        {allWomen.edges.map(({ node }) => (
          <Card horizontal className="card--ladies">
          <h4>{node.brand} {node.name}</h4>
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
          Here is the standard card with an image thumbnail.
          <hr />
          <a href={node.buyURL}>BUY HERE</a>
        </Card>
        ))}
        </div>
        <Link to="/">Go back to the homepage</Link>
      </>
    )}
  />
)

export default LadiesPage
