import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout/Layout"

import "./postTemplate.scss"

export default function PostTemplate({ data, path }) {
  const { markdownRemark } = data
  const {
    frontmatter: { title, date, tags },
    html,
  } = markdownRemark

  return (
    <Layout pageTitle={title} path={path}>
      <header className="post-header">
        <section className="tag-section">
          {tags.map(tag => (
            <label key={tag} className={`post-tag ${tag}`}>
              {tag}
            </label>
          ))}
        </section>
        <section className="title-section">
          <h1>{title}</h1>
          <p className="date">{date}</p>
        </section>
      </header>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
