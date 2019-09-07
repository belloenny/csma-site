import { Link } from "gatsby"
import PropTypes from "prop-types"
import { slide as Menu } from "react-burger-menu";
import React from "react"

export default props => {
  return (
    <React.Fragment> 
      <Link to="/"><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fc34c59e551524504f387_Group%20256.png" width={161} alt="" className="image" /></Link>
      <Menu {...props} right={true}>
        <Link to="/" className="ourpartners ">HOME</Link>
        <Link to="/partners/" className="ourpartners ">OUR PARTNERS</Link>
        <Link to="/news/" className="ourpartners ">NEWS AND MEDIA</Link>
        <Link to="/contact/" className="ourpartners ">CONTACT</Link><Link to="/team/" className="ourpartners ">OUR TEAM</Link>
      </Menu> 
    </React.Fragment>
  
  );
};