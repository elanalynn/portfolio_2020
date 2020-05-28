import React from "react"

import { ExternalLink } from "../components/ExternalLink/ExternalLink"
import { Layout } from "../components/Layout/Layout"

const code = ({ path }) => (
  <Layout pageTitle="Code" path={path}>
    <h1>Code</h1>
    <section>
      <p>
        I have been working as a software engineer for a few years now and
        really enjoy using code to:
      </p>
      <ol>
        <li>Solve interesting problems</li>
        <li>Build great user experiences</li>
      </ol>
      <p>
        I'm currently taking a break from a formal engineering role, but I will
        be working on a few personal projects that I plan to share here very
        soon (I'm writing this in June of 2020... keeping myself honest). In the
        meantime, you can check out my
        <ExternalLink href="https://drive.google.com/file/d/1OsgCZBdkzIxczrgXJ9Z000xPup0OCgOD/view?usp=sharing">
          resume
        </ExternalLink>
        (I will be looking for work again one day), connect with me on
        <ExternalLink href="https://www.linkedin.com/in/elanalynn/">
          LinkedIn
        </ExternalLink>
        , and find me on
        <ExternalLink href="https://www.github.com/elanalynn/">
          GitHub
        </ExternalLink>
        .
      </p>
    </section>
  </Layout>
)

export default code
