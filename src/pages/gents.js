import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const GentsPage = () => (
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
              localImage {
                id
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              imageURL
            }
          }
        }
      }
    `}
    render={({ allMen }) => (
      <>
        <SEO title="Men Shoes" />
        {allMen.edges.map(({ node }) => (
          <ul key={node.id}>
            <li>
              <strong>Product:</strong> {node.name}
            </li>
            <li>
              <strong>Brand:</strong> {node.brand}
            </li>
            <li>
              <strong>Color:</strong> {node.color}
            </li>
            <li>
              <strong>Type:</strong> {node.type}
            </li>
            <li>
              <strong>Price:</strong> € {node.price}
            </li>
            <li>
              <a href={node.buyURL}>Buy here</a>
            </li>
            <div style={{ width: `calc(220px + 10vw)`, margin: `0 auto` }}>
              <Img fluid={node.localImage.childImageSharp.fluid} />
            </div>
          </ul>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </>
    )}
  />
)

export default GentsPage
