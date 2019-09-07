import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Header from "../components/header";
import Footer from "../components/footer";

const NewsPost = ({ data }) => {
  const { title, description, image } = data.contentfulNewsPost;
  return (
      
     <React.Fragment>
        <Header pageWrapId={"page-wrap"} outerContainerId={"App"}/>
        <div className="centered w-container" id="page-wrap">
          <SEO title={title} />
          <h1 className="heading-7">{title}</h1>
          <img alt={title} src={image.file.url} />
          <div className="body-text"
            dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}
          ></div>
          <div className='nav-links'>
            <Link to="/news/" className="li">View more posts</Link>
            <Link to="/" className="li">Back to Home</Link>
          </div>
          
        </div>
        <Footer/>
     </React.Fragment>
    
  );
};

export default NewsPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulNewsPost(slug: { eq: $slug }) {
      title
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
      }
    }
  }
`;