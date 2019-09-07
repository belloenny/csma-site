import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <React.Fragment>
      <div data-collapse="medium" data-animation="default" data-duration={400} className="navbar-2 w-nav">
        <div className="container-2 w-container">
            <a href="#" className="brand w-nav-brand"><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fc34c59e551524504f387_Group%20256.png" width={144} alt="" /></a>
            <nav role="navigation" className="nav-menu w-nav-menu"><a href="#" className="nav-link w-nav-link">Home</a><Link to="/news/" className="nav-link-2 w-nav-link">News and Media</Link><a href="#" className="nav-link-2 w-nav-link">Our Team</a><a href="#" className="nav-link-2 w-nav-link">Gallery</a><a href="#" className="nav-link-2 w-nav-link">News and Media</a><a href="#" className="nav-link-3 w-nav-link">Contact</a></nav>
            <div className="w-nav-button">
                <div className="w-icon-nav-menu" /></div>
        </div>
    </div>
    <div className="navbar w-container">
        <div className="leftbutton"><Link to="/partners/" className="ourpartners w-button">OUR PARTNERS</Link><Link to="/news/" className="ourpartners w-button">NEWS AND MEDIA</Link></div>
        <div className="logo"><Link to="/"><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fc34c59e551524504f387_Group%20256.png" width={161} alt="" className="image" /></Link></div>
        <div className="rightbutton"><Link to="/contact/" className="ourpartners w-button">CONTACT</Link><Link to="/team/" className="ourpartners w-button">OUR TEAM</Link></div>
    </div>
  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
