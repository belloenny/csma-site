const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulNewsPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }

      // Resolve the paths to our template
      const newsPostTemplate = path.resolve("./src/templates/newsPage.js");
      const homePage = path.resolve("./src/pages/news.js")
      const gallery = path.resolve("./src/pages/gallery.js")
      const contact = path.resolve("./src/pages/contact.js")
      const ourTeam = path.resolve("./src/pages/ourteam.js")
      const partners = path.resolve("./src/pages/partners.js")
      
      // Create main home page
      createPage({
        path: `/news/`,
        component: homePage,
      })
      // create contactPage page
      createPage({
        path: `/contact/`,
        component: contact,
      })
      // create ourteam page
      createPage({
        path: `/team/`,
        component: ourTeam,
      })
       // create partners page
       createPage({
        path: `/partners/`,
        component: partners,
      })

      // Then for each result we create a page.
      result.data.allContentfulNewsPost.edges.forEach(edge => {
        createPage({
          path: `/blogpost/${edge.node.slug}/`,
          component: slash(newsPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}