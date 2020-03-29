import React from "react"

import { Layout } from "../components/Layout/Layout"

import "./index.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home" className="index">
      <h1>Hello!</h1>
      <p className="intro">My name is Elana. This is where I keep my things.</p>
    </Layout>
  )
}

export default IndexPage
