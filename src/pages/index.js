
import React, { Fragment } from "react"
import { Link } from "gatsby"
// import
import SEO from "../components/seo"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { css, Global } from "@emotion/core"
import "../components/bootstrap.min.css"
import Button from 'react-bootstrap/Button'
// import Video from "../../public/static/video.mp4"

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
  background-color: rgb(40, 49, 73)!important;
}
`
const titleStyle = css`
  color: rgb(243, 129, 129);
  font-family: 'Black Ops One', cursive;
  font-weight: 400;
  font-size: calc(25px + 1.5vw);
  text-shadow: 3px 3px black;
`

const buttonStyle = css`
  background-color: transparent;
  color: rgb(243, 129, 129);
  border: 2px solid rgb(0, 129, 138);
  margin: 10px;
  &:hover {
    background-color: rgb(243, 129, 129);
    color: white;
    border: 2px solid rgb(40, 49, 73);
}
 `

const IndexPage = () => (
    <Fragment>
        <Global styles={globalStyles} />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        
        <section style={{ width: `70%`, margin: `30px auto`, backgroundColor: `rgb(64, 75, 105)`, borderRadius: `10px`, padding: `30px`}}>
        <h1 css={titleStyle}>SHOOLiX</h1>
        <h4 style={{color:  `rgb(219, 237, 243)`}}>Find your perfect pair!</h4>
        <Link to="/page-2/"><Button variant="secondary" size="lg" css={buttonStyle}>
      View products
    </Button></Link>
        <div style={{ margin: `0 auto`, borderRadius: `10px`}}>
        {/* <video id="background-video" width="560" height="315" src={Video} preload="auto" autoPlay muted loop 
        style={{maxWidth: `100%`, borderRadius: `10px`, border: `4px solid rgb(0, 129, 138)`, backgroundColor: `rgb(0, 129, 138)`, 
        padding: `2% 0`, boxShadow: `0 10px 25px 0 rgba(0, 0, 0, 0.3), 0 10px 25px 0 rgba(0, 0, 0, 0.3)`}}>
        </video> */}
        </div>
        </section>
        <footer style={{color: `rgb(0, 129, 138)`}}>
          © {new Date().getFullYear()} Shoolix
        </footer>
      </Fragment>
)

export default IndexPage
