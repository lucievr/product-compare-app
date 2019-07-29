import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

const LadiesPage = () => {
  return (
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
      render={({ allWomen }) => {
        return (
          <>
            <SEO title="Women Shoes" />
            <Global styles={GlobalStyles} />

            <div className="div--card">
              {allWomen.edges.map(({ node }) => (
                <div className="card--ladies">
                  <h2 className="ladies">
                    {node.brand} {node.name}
                  </h2>
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
                      <span className="product--desc">Price:</span> €{" "}
                      {node.price}
                    </li>
                  </ul>
                  <div>
                    <Img
                      fluid={node.localImage.childImageSharp.fluid}
                      className="image--product"
                    />
                  </div>
                  <hr className="ladies" />
                  <a href={node.buyURL} className="ladies">
                    BUY HERE
                  </a>
                  <h3 class="reviews">Reviews</h3>

                  <form
                    name={node.name}
                    method="POST"
                    data-netlify-honeypot="bot-field"
                    data-netlify="true"
                  >
                    <input type="hidden" name="form-name" value={node.name} />
                    <p>
                      <label>
                        Name: <input type="text" name="name" />
                      </label>
                    </p>
                    <p>
                      <label>
                        Email: <input type="email" name="email" />
                      </label>
                    </p>

                    <p>
                      <label>
                        Review message: <textarea name="message" />
                      </label>
                    </p>
                    <p>
                      <button type="submit">Send</button>
                    </p>
                  </form>
                </div>
              ))}
            </div>
            <Link to="/">Go back to the homepage</Link>
          </>
        )
      }}
    />
  )
}

export default LadiesPage
