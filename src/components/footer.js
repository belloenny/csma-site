import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                    <div className="w-layout-grid grid-3">
                    <div className="ftext"><Link to="/contact/" className="ourpartners ">CONTACT</Link></div>
                    <div className="flext"><Link to="/news/" className="ourpartners ">NEWS</Link></div>
                    <img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6feb145db14425d95e7ad3_facebook.png" alt="" /><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6feb1355fcc09ab8ab2259_twitter.png" alt="" /></div>
            </div>
        )
    }
}
