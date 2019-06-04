import React from "react"
import { Link } from "gatsby"
// import { css } from "@emotion/core"

import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <button
    class="snipcart-add-item"
    data-item-id="2"
    data-item-name="Bacon"
    data-item-price="3.00"
    data-item-weight="20"
    data-item-url="https://shoolix.netlify.com"
    data-item-description="Some fresh bacon">
        Buy bacon
</button>

<a href="#" class="snipcart-checkout">Click here to checkout</a>

<div class="snipcart-summary">
    Number of items: <span class="snipcart-total-items"></span>
    Total price: <span class="snipcart-total-price"></span>
</div>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
