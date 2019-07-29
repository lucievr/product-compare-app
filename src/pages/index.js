import React, { Fragment } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import { css, Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

import Video from "../images/video.mp4"

const titleStyle = css`
  color: rgb(243, 129, 129);
  font-family: "Black Ops One", cursive;
  font-weight: 400;
  font-size: calc(25px + 1.5vw);
  margin: 5px;
  text-shadow: 3px 3px black;
`

const buttonStyle = css`
  background-color: transparent;
  font-size: calc(11px + 0.5vw);
  color: rgb(243, 129, 129);
  font-weight: 500;
  padding: 10px;
  border: 2px solid rgb(0, 129, 138);
  border-radius: 10px;
  margin: 10px;
  &:hover {
    background-color: rgb(243, 129, 129);
    color: white;
    border: 2px solid rgb(40, 49, 73);
    cursor: pointer;
  }
`

const IndexPage = () => (
  <Fragment>
    <Global styles={GlobalStyles} />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <section>
      <h1 css={titleStyle}>SHOOLiX</h1>
      <h2>Find your perfect pair!</h2>
      <Link to="/ladies/">
        <button css={buttonStyle}>
          Shop ladies
        </button>
      </Link>
      <Link to="/gents/">
        <button css={buttonStyle}>
          Shop gents
        </button>
      </Link>
      <div className="div--video">
        <video
          id="background-video"
          width="560"
          height="315"
          src={Video}
          preload="auto"
          autoPlay
          muted
          loop
        />
      </div>
    </section>

    <footer>
      © {new Date().getFullYear()} Shoolix
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com/" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC 3.0 BY
        </a>
      </div>
    </footer>
  </Fragment>
)

export default IndexPage
