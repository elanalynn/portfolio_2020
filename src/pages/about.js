import React from "react"

import { ExternalLink } from "../components/ExternalLink/ExternalLink"
import { Layout } from "../components/Layout/Layout"

const about = ({ path }) => (
  <Layout pageTitle="About" path={path}>
    <h1>About</h1>
    <p>
      👋 I am a web developer (currently at Shopify). In my free time, I love to
      read, write, and paint. Check out my shop,
      <ExternalLink href="https://www.veryuniqueart.com">
        veryuniqueart.com
      </ExternalLink>
      . I also like gardening, riding bikes, playing games, hiking, and yoga. I am
      vegan and I care very much about reducing suffering in the world. For a
      more formal explanation of my professional experience check out
      <ExternalLink href="https://www.linkedin.com/in/elanalynn/">
        LinkedIn
      </ExternalLink>
      . Find some of my work on
      <ExternalLink href="https://www.github.com/elanalynn/">
        Github
      </ExternalLink>
      .
    </p>

    <p>The amazing cow photo on the index page is by <ExternalLink href="https://www.instagram.com/shanerounce/">Shane Rounce</ExternalLink></p>
  </Layout>
)

export default about
