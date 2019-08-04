import React, { useState, useEffect } from "react"
import axios from "axios"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

const NETLIFY_FUNC = "shoolix.netlify.com/.netlify/functions"

const Product = props => {
  const [data, setData] = useState({ reviews: [] })
  const [url, setUrl] = useState(
    `https://${NETLIFY_FUNC}/fetchreviews?id=${props.data.women.id}`
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(url)

        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return (
    <>
      <SEO title={props.data.women.name} />
      <Global styles={GlobalStyles} />
      <div className="div--card">
        <div className="card--ladies">
          <h2 className="ladies">
            {props.data.women.brand} {props.data.women.name}
          </h2>
          <ul className="div--product">
            <li>
              <span className="product--desc">Brand:</span>{" "}
              {props.data.women.brand}
            </li>
            <li>
              <span className="product--desc">Color:</span>{" "}
              {props.data.women.color}
            </li>
            <li>
              <span className="product--desc">Type:</span>{" "}
              {props.data.women.type}
            </li>
            <li>
              <span className="product--desc">Price:</span> €{" "}
              {props.data.women.price}
            </li>
          </ul>
          <div>
            <Img
              fluid={props.data.women.localImage.childImageSharp.fluid}
              className="image--product"
            />
          </div>
          <hr className="ladies" />
          {/* <a href={data.women.buyURL} className="ladies">
                    BUY HERE
                  </a> */}
          {isError && <div>Something went wrong ...</div>}

          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <ul>
              {data.reviews.map(o => (
                <p key={o.number}>
                  {o.name}: {o.data.message}
                </p>
              ))}
            </ul>
          )}

          <h3 className="reviews">Reviews</h3>

          <form
            name={`product-${props.data.women.id}`}
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input
              type="hidden"
              name="form-name"
              value={`product-${props.data.women.id}`}
            />
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
      </div>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </>
  )
}

export default Product

export const query = graphql`
  query productById($id: String) {
    women(id: { eq: $id }) {
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
`
