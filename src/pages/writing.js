import { graphql, StaticQuery } from "gatsby"
import React from "react"

import { PostCard } from "../components/PostCard/PostCard"
import { Layout } from "../components/Layout/Layout"

const writing = () => {
  const query = graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              blurb
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
          .filter(edge => edge.node.frontmatter.posttype !== "art")
          .map(edge => {
            const {
              node: {
                frontmatter: { blurb, date, image, path, tags, title },
                id,
              },
            } = edge
            return (
              <PostCard
                className={"post"}
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
                <div className="blurb">{blurb}</div>
              </PostCard>
            )
          })
        return (
          <Layout pageTitle="Writing">
            <h1>Writing</h1>
            <p className="pageInfo">
              Fiction, creative nonfiction (CNF), and a little bit of personal
              bloggery
            </p>
            <section className="post-index">{Posts.reverse()}</section>
          </Layout>
        )
      }}
    />
  )
}

export default writing
