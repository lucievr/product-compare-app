import React from "react"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

export default class LadiesPage extends React.Component {

  constructor(data) {
    super(data)

    this.state = {
      products: []
    }
  }

  getProducts() {
    return this.props.data.allWomen.edges
  }

  updateProducts() {
    this.setState({ products: this.getProducts() })
  }

  componentDidMount() {
    this.updateProducts()
  }

  render() {
  return (
          <>
            <SEO title="Women Shoes" />
            <Global styles={GlobalStyles} />

            <div className="div--card">
              {this.state.products.map((o, index) => (
                <div key={index} className="card--ladies">
                <Link to={o.node.loc}>
                  <h2 className="ladies">
                    {o.node.brand} {o.node.name}
                  </h2>
                  <ul className="div--product">
                    <li>
                      <span className="product--desc">Brand:</span> {o.node.brand}
                    </li>
                    <li>
                      <span className="product--desc">Color:</span> {o.node.color}
                    </li>
                    <li>
                      <span className="product--desc">Type:</span> {o.node.type}
                    </li>
                    <li>
                      <span className="product--desc">Price:</span> €{" "}
                      {o.node.price}
                    </li>
                  </ul>
                  <div>
                    <Img
                      fluid={o.node.localImage.childImageSharp.fluid}
                      className="image--product"
                    />
                  </div>
                  <hr className="ladies" />
                  <a href={o.node.buyURL} className="ladies">
                    BUY HERE
                  </a>
                  </Link>
                </div>
              ))}
            </div>
            <Link to="/">Go back to the homepage</Link>
          </>
        )
  }
}

export const query = graphql`
  query ShoolixWomQuery {
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
`
