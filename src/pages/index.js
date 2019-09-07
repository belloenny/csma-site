import React from "react"
import Header from '../components/header'
import SlideShow from '../components/slide'
import Footer from '../components/footer'
import SEO from '../components/seo'
import "../global/index.css"
import "../global/webflow.css"
import "../global/normalize.css"


class IndexPage extends React.Component {
    render () {
        
        return (
            <div>
            <Header/>
            <SlideShow/>
            <SEO title='CSMA' description='Transforming Africa by harnessing the potential of youth'/>
            <div className="backpic">
                <div className="_2ndp w-container">
                    <h6 className="orangeheader">Our Mission</h6>
                    <h1 className="transafr">Transforming Africa by harnessing the potential of youth as partners for development and peace through sports.</h1></div>
                <div className="landingtext _2">
                    <h3 className="quotes">“ Sports have the power to change the world. <br />It has the power to inspire, the power to unite people <br />in a way that little else does. It speaks to youth in <br />a language they understand. <br />– Nelson Mandela”</h3></div>
                <div className="w-container">
                    <h4 className="orangeheader _2">Our strategic areas</h4>
                    <div className="cardholder">
                        <div className="bos">
                            <h1 className="cardtext">Sport for<br />Development</h1><a href="https://drive.google.com/open?id=1XqKMvj3xLeQp2pCVgtivwMc3--tRSSjt" className="download" target="_blank">Download</a></div>
                        <div className="bos">
                            <h1 className="cardtext">Business of <br />Sports</h1><a href="https://drive.google.com/open?id=1sqU_BQNLJpEgStwmGgX_TYMnEa1eKZ4_" className="download" target="_blank">Download</a></div>
                    </div>
                </div>
            </div>
            <div className="vision">
                <div className="visioncontent w-container">
                    <h3 className="heading">Our Vision</h3>
                    <h1 className="heading-2">To be the leading management firm of sustainable developments through sport while harnessing the full potential of youths in Africa.</h1></div>
            </div>
            <div className="cardsec">
                <div className="top-section">
                    <div className="bos">
                        <h1 className="cardtext">Sportsmanship</h1>
                        <p className="pc">CSMA is committed to good sportsmanship the most fundamental being RESPECT.</p>
                    </div>
                    <div className="bos">
                        <h1 className="cardtext">Sustainability</h1>
                        <p className="pc">We committed to sustainability and to acting right by the interest of our clients or the benefit of the African Youth.</p>
                    </div>
                    <div className="bos">
                        <h1 className="cardtext">Accountability</h1>
                        <p className="pc">Understanding that accountability is the highest form of leadership, CSMA is founded in honesty, transparency and an intentional care for the African Youth</p>
                    </div>
                </div>
                <div className="cardorangearrange w-container">
                    <div className="bos paragraph-2">
                        <h1 className="cardtext">Integrity</h1>
                        <p className="pc">An unwavering commitment to doing our work with integrity
                            <br />for the wellbeing of the African youth as our number one priority!</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="w-container">
                    <h4 className="heading-6">The value we bring to African Sports</h4>
                    <h2 className="transafr">We develop economically sustainable and value based partnerships focusing on the key stakeholder; The African Youth.</h2>
                    <div className="w-layout-grid csmatext">
                        <h4 id="w-node-18668647e60d-6116a57d" className="csma">CSMA have an in-depth understanding of the sports ecosystems from the grassroots to the pro levels and the vast opportunities &amp; solvable challenges sports in Africa presents.</h4>
                        <h4 id="w-node-68395d4e09c1-6116a57d" className="csma">CSMA designs data driven custom-made sports programs &amp; initiatives to change youths &amp; communities in Africa where it matters most.<br />‍</h4>
                        <h4 id="w-node-38e8f5d1ca21-6116a57d" className="csma">CSMA applies evolving and innovative technology approaches in sports commercialization by incorporating global trends, insights and expert intuition in all our projects.<br />‍</h4>
                        <h4 id="w-node-247e2033c6f3-6116a57d" className="csma">CSMA acknowledges the unique African sporting culture in sports and infuse innovation to streamline the dynamic sports demographics.</h4></div>
                </div>
            </div>
            <div className="partner">
                <div className="w-container">
                    <h4 className="tw">Our Partners</h4>
                    <div className="w-layout-grid grid-2"><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fe7535db144683b5e69ec_logo_small2.png" alt="" /><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fe7535db144683b5e69ec_logo_small2.png" alt="" /></div>
                </div>
            </div>
            <div className="num w-container">
                <h4 className="heading-5">Client Engagement Flow</h4><img src="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fe85681a3cf53a1ed0756_330378-P9WXN6-448.png" srcSet="https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fe85681a3cf53a1ed0756_330378-P9WXN6-448-p-500.png 500w, https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fe85681a3cf53a1ed0756_330378-P9WXN6-448-p-800.png 800w, https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fe85681a3cf53a1ed0756_330378-P9WXN6-448-p-1080.png 1080w, https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fe85681a3cf53a1ed0756_330378-P9WXN6-448.png 1270w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 728px, 940px" alt="" /></div>
            <Footer/>
         </div>
        )
    }
}

export default IndexPage
