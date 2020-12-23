import React from "react"

import { ExternalLink } from "../components/ExternalLink/ExternalLink"
import { Layout } from "../components/Layout/Layout"

const about = ({ path }) => (
  <Layout pageTitle="About" path={path}>
    <h1>About</h1>
    <p>
      I am a software developer (currently working at Shopify). I write (essays
      and stories, and maybe one day a book). I am vegan and I care very much
      about reducing suffering in the world. I read a lot. It's great. It turns
      out that there is some interesting stuff in books! I make art and I sell
      it at
      <ExternalLink href="https://www.kopelevich.co">
        kopelevich.co
      </ExternalLink>
      (a Shopify store that I share with my mom, who is very a talented artist).
      I also like gardening, riding my bike, hiking, practicing yoga and
      meditiation, organizing and procrastinating, and rebuilding my personal
      site every six months. For a more formal explanation of my professional
      experience check out this nifty site:
      <ExternalLink href="https://www.linkedin.com/in/elanalynn/">
        LinkedIn
      </ExternalLink>
      . Find some code stuff here:
      <ExternalLink href="https://www.github.com/elanalynn/">
        Github
      </ExternalLink>
      .
    </p>
  </Layout>
)

export default about
