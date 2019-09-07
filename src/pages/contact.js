import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="section w-container">
                    <div className="container2 w-container">
                        <h1 className="contact-msg">Contact Us</h1>
                        <form 
                                id="email-form" 
                                name="contact" 
                                data-netlify="true"
                                
                                method="POST" 
                                className="form"
                                >
                                <div className="upper-block _1">
                                    <div className="form-block">
                                        <label className="form-text">Enter your name</label>
                                        <input type="text" className="form-input w-input" maxLength={256} name="Name" data-name="Field 3" placeholder="Enter your name here" id="field-3" required />
                                    </div>
                                </div>
                                <div className="upper-block bottom">
                                    <div className="form-block">
                                        <label className="form-text">Email Address‍</label>
                                        <input type="email" className="form-input _3 w-input" maxLength={256} name="email" data-name="Field" placeholder="Enter your email here" id="field" required />
                                    </div>
                                </div>
                                <div className="form-block final">
                                    <label className="form-text">Message</label></div>
                                <textarea name="comments" id="field-2" cols={30} rows={10} className="form-input final w-input" defaultValue={ ""} />
                                <input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit w-button" />
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
