
import React, { Fragment } from "react"
import { Link } from "gatsby"
// import
import SEO from "../components/seo"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { css, Global } from "@emotion/core"
import Video from "../../public/static/video.mp4"

const globalStyles = css`
  * {
  box-sizing: inherit;
}
  html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}
  body {
  margin: 0;
  word-wrap: break-word;
  text-align: center;
  background-color: rgb(40, 49, 73);
}
  *:before {
  box-sizing: inherit;
}
  *:after {
  box-sizing: inherit;
}
`

const IndexPage = () => (
    <Fragment>
        <Global styles={globalStyles} />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <section style={{ width: `80%`, margin: `0 auto`, backgroundColor: `rgb(64, 75, 105)`, borderRadius: `10px`}}>
        <div style={{ margin: `0`, padding: `20px`}}>
        <iframe width="560" height="315" src={Video} title="videofootage" ></iframe>
        
        {/* ?autoplay=1?frameborder=0?disablekb=1?fs=0?modestbranding=1?playsinline=1?version=3&loop=1&playlist=7GduxsfkXX8?loop=1 */}
        </div>
        </section>
        <Link to="/page-2/">Go to page 2</Link>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Fragment>
)

export default IndexPage
