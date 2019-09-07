import React from 'react'
import { Link, graphql } from "gatsby";
import NewsCard from '../components/newsCard'
import Header from '../components/header'
import Footer from '../components/footer';
import SEO from '../components/seo'


const NewsPage = ({ data }) => {
    const  newsPosts  = data.allContentfulNewsPost.edges;
    return (
     <React.Fragment>
       <Header/>
       <SEO title='NEWS AND MEDIA' description='Transforming Africa by harnessing the potential of youth'/>
       <div className="newssec">
          <div className="newslanding w-container">
              <h2 className="heading-7">NEWS</h2>
              <div className="w-layout-grid grid-4">
                {newsPosts.map(({ node: news }) => (
                  <NewsCard 
                    id={news.id}title={news.title} 
                    body={news.description.childMarkdownRemark.excerpt} 
                    image={news.image.file.url}
                    slug={news.slug}
                  />
                ))}
                
              </div>
          </div>
      </div>
      <Footer/>
     </React.Fragment>
    );
  };
  
export default NewsPage

export const query = graphql`
  query allNewsQuery {
    allContentfulNewsPost(limit: 10) {
      edges {
        node {
          title
          id
          slug
          image {
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
