const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const artTemplate = path.resolve(`src/templates/artTemplate.js`)
  const postTemplate = path.resolve(`src/templates/postTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              blurb
              date
              description
              image
              medium
              path
              posttype
              tags
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.posttype === "writing") {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {},
      })
    }

    if (node.frontmatter.posttype === "art") {
      createPage({
        path: node.frontmatter.path,
        component: artTemplate,
        context: {},
      })
    }
  })
}
