import { Link } from "gatsby"
import PropTypes from "prop-types"
import { slide as Menu } from "react-burger-menu";
import React from "react"

export default props => {
  return (
    <React.Fragment> 
      <Link to="/"><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d73a488fc69ffc0a5d905b0_newlogo.png" width={161} alt="" className="image" /></Link>
      <Menu {...props} right={true} noOverlay={true}>
        <Link to="/" className="ourpartners ">HOME</Link>
        <Link to="/news/" className="ourpartners ">NEWS AND MEDIA</Link>
        <Link to="/contact/" className="ourpartners ">CONTACT</Link>
      </Menu> 
    </React.Fragment>
  
  );
};