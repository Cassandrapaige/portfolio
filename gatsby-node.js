const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const {createNodeField} = actions;

    if(node.internal.type === `MarkdownRemark`) {
        // Create slug -- file path for routing
        const slug = createFilePath({
            node,
            getNode
            // include basePath if you need a base path in your url
        })
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    return graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({node}, index) => {
          const slug = node.fields.slug; 
            createPage({
                path: slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: slug,
                    prev: index === 0 ? posts[posts.length - 1].node : posts[index - 1].node,
                    next: index === (posts.length - 1) ? posts[0].node : posts[index + 1].node,
                }
            })
        })
    })
}

