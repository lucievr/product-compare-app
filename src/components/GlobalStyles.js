import { css } from "@emotion/core"

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    text-align: center;
    font-size: calc(11px + 0.5vw);
    line-height: 1.5;
    word-wrap: break-word;
    background-color: rgb(64, 75, 105) !important;
  }

  section {
    width: 70%;
    margin: 30px auto;
    background-color: rgb(64, 75, 105);
    border-radius: 10px;
    padding: 30px;
  }

  h2 {
    color: rgb(219, 237, 243);
  }

  h2.ladies {
    color: #88ddd1;
    letter-spacing: 1px;
  }

  h2.gents {
      color: #f27373;
  }

  .div--video {
    margin: 0 auto;
    border-radius: 10px;
  }

  #background-video {
    maxWidth: 100%;
    border-radius: 10px;
    border: 4px solid rgb(0, 129, 138);
    background-color: rgb(0, 129, 138);
    padding: 2% 0;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3), 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  }

  .div--card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 98vw;
  }

  div.card--ladies {
    width: calc(260px + 5vw);
    max-width: 90vw;
    background-color: rgb(243, 129, 129)!important;
    margin: calc(20px + 3vw);
    ${'' /* box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3), 0 10px 25px 0 rgba(0, 0, 0, 0.3); */}
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
  }

  div.card--ladies:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  div.card--ladies a {
        color: #88ddd1;
        margin: 10px;
        text-decoration: none;
  }

  div.card--gents {
    width: calc(260px + 5vw);
    max-width: 90vw;
    background-color: rgb(0, 129, 138)!important;
    margin: calc(20px + 3vw);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
  }

  div.card--gents:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }

  div.card--gents a {
        color: #f27373;
        margin: 10px;
        text-decoration: none;
  }

  .div--product {
      text-align: left;
      width: 70%;
      margin: 10px auto;
  }

  .product--desc{
      color: rgb(219, 237, 243);
      font-weight: 500;
  }

  .div--image {
    margin: 0 auto;
    width: calc(300px + 10vw);
  }

  .image--product {
      margin: 10px;
      border-radius: 5px;
      border: 5px solid rgb(219, 237, 243);
  }

  hr.ladies {
    border: 0;
    height: 5px;
    background: rgb(243, 129, 129);
    background-image: linear-gradient(to right, rgb(243, 129, 129), #808080, rgb(243, 129, 129));
  }

  hr.gents {
    border: 0;
    height: 5px;
    background: rgb(0, 129, 138);
    background-image: linear-gradient(to right, rgb(0, 129, 138), #808080, rgb(0, 129, 138));
  }

  footer {
    color: rgb(0, 129, 138);
  }
`
export default GlobalStyles
