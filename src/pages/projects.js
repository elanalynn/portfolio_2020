import React from "react"

import { Layout } from "../components/Layout/Layout"
import { ProjectCard } from "../components/ProjectCard/ProjectCard"

const projects = () => (
  <Layout pageTitle="Projects">
    <h1>Projects</h1>
    <p>
      Isn't everything a project? Well, these are things that don't fit in other
      categories.
    </p>
    <ProjectCard>TODO</ProjectCard>
  </Layout>
)

export default projects
