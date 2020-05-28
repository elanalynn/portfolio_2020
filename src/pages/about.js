import React from "react"

import { ExternalLink } from "../components/ExternalLink/ExternalLink"
import { Layout } from "../components/Layout/Layout"

const about = ({ path }) => (
  <Layout pageTitle="About" path={path}>
    <h1>About</h1>
    <p>
      I am a number of things: software engineer, writer, vegan, reader, artist,
      gardener, bike rider, hiker, list maker, person... I am currently taking a
      break from working in tech and focusing on all kinds of writing, various
      projects involving self reflection and animal advocacy, and the general
      enjoyment of life. I recognize how lucky I am to be able to do this. I
      made this site to share my ideas and work. If you are looking for a more
      professional story, connect with me on
      <ExternalLink href="https://www.linkedin.com/in/elanalynn/">
        LinkedIn
      </ExternalLink>
      , and if you would like to see what I care enough about to tweet, well,
      you know how
      <ExternalLink href="https://www.twitter.com/elanalynn/">
        this
      </ExternalLink>
      works.
    </p>
  </Layout>
)

export default about
