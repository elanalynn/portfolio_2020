import { graphql, StaticQuery } from "gatsby"
import React from "react"

import { ArtCard } from "../components/ArtCard/ArtCard"
import { Layout } from "../components/Layout/Layout"

const art = () => {
  const query = graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              image
              path
              posttype
              tags
              title
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={query}
      render={data => {
        const Posts = data.allMarkdownRemark.edges
          .filter(edge => edge.node.frontmatter.posttype === "art")
          .reverse()
          .map(edge => {
            const {
              node: {
                frontmatter: { date, image, path, tags, title },
                id,
              },
            } = edge
            return (
              <ArtCard
                date={date}
                id={id}
                image={image}
                title={title}
                to={path}
                key={id}
                post={edge.node}
              >
                <div className="tags">
                  {tags &&
                    tags.map(tag => {
                      return (
                        <span
                          className="tag"
                          key={tags[0] + Math.random() * 100}
                        >
                          {tag}
                        </span>
                      )
                    })}
                </div>
                <h2 className="text">{title}</h2>
              </ArtCard>
            )
          })
        return (
          <Layout pageTitle="Art">
            <h1>Art</h1>
            <p className="pageInfo">Illustrations and the likes</p>
            <section className="post-index">{Posts.reverse()}</section>
          </Layout>
        )
      }}
    />
  )
}

export default art
