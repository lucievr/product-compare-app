import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Autocomplete } from "react-materialize"
import { Global } from "@emotion/core"
import { useSpring, animated } from 'react-spring'
import GlobalStyles from "../components/GlobalStyles"


const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.06]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const LadiesPage = () => { 
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 50, friction: 100 } }));
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
          <Autocomplete data={{Lucie: null}} placeholder="Search here" />
         <div className ="div--card">
          {allWomen.edges.map(({ node }) => (
            <animated.div className="card--ladies"
           
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}>
            <h4 className="ladies">{node.brand} {node.name}</h4>
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
            <hr className="ladies" />
            <a href={node.buyURL} className="ladies">BUY HERE</a>
          </animated.div>
          ))}
          </div>
          <Link to="/">Go back to the homepage</Link>
        </>
      )}}
    />
  )
}

export default LadiesPage
