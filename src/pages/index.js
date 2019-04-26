
import React, { Fragment } from "react"
import { Link } from "gatsby"
// import
import SEO from "../components/seo"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { css, Global } from "@emotion/core"
import "../components/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
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
        
        <section style={{ width: `80%`, margin: `30px auto`, backgroundColor: `rgb(64, 75, 105)`, borderRadius: `10px`, padding: `30px`}}>
        <h1 style={{color: `rgb(0, 129, 138)`}}>SHOOLiX</h1>
        <h2 style={{color:  `rgb(219, 237, 243)`}}>Find the perfect pair!</h2>
        <Link to="/page-2/"><Button variant="secondary" size="lg">
      View products
    </Button></Link>
        <div style={{ margin: `0 auto`, borderRadius: `10px`}}>
        <video id="background-video" width="560" height="315" src={Video} preload="auto" autoPlay muted loop 
        style={{maxWidth: `100%`, borderRadius: `10px`, border: `4px solid rgb(0, 129, 138)`, backgroundColor: `rgb(0, 129, 138)`, padding: `2% 0`}}>
        </video>
        </div>
        </section>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Fragment>
)

export default IndexPage
