import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

const Product = () => {
  const [data, setData] = useState({ reviews: [] });
  const [url, setUrl] = useState(
    `https://shoolix.netlify.com/.netlify/functions/fetchreviews`,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);


  return (
    <StaticQuery
      query={graphql`
        query Query {
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
                <div key={node.id} className="card--ladies">
                  <h2 className="ladies">
                    {node.brand} {node.name}
                  </h2>
                  <ul className="div--product">
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
                    name={`product-${node.id}`}
                    method="POST"
                    data-netlify-honeypot="bot-field"
                    data-netlify="true"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value={`product-${node.id}`}
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
