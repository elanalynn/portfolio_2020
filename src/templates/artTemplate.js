import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout/Layout"

import "./artTemplate.scss"

export default function ArtTemplate({ data }) {
  const { markdownRemark } = data
  const {
    frontmatter: { date, description, image, medium, tags, title },
  } = markdownRemark

  return (
    <Layout pageTitle={title}>
      <div className="art-detail">
        <div className="art-data">
          <h1>{title}</h1>
          <p>{date.substring(date.length - 4)}</p>
          <em>{medium}</em>
          <p>{description}</p>

          {tags.map(tag => (
            <label key={tag} className={tag}>
              {tag}
            </label>
          ))}
        </div>
        <div className="art-content">
          <img
            src={`https://elanalynn-assets.s3-us-west-1.amazonaws.com/${image}.jpg`}
            alt={description}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        image
        medium
        path
        title
        tags
      }
    }
  }
`
