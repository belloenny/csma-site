import React, { Component } from 'react'
import { Zoom } from 'react-slideshow-image';

const slideImages = [
    {
        src:'https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d6fc64a2fd62f7bbc25b6c7_Group%20259.png',
        title: 'About CSMA',
        description: 'A dynamic sports management firm that accelerates investment for the youth through sports technology, innovation and sustainable partnerships for meaningful livelihoods in Africa.'

    },
    {
        src:'https://uploads-ssl.webflow.com/5d6e3485715588723c16a57c/5d70c9663f57a5fd2b6621b7_ACV44A3253_.jpg',
        title: '',
        description: ''
    },
];

//Use a photo with the text already inside for the slide 

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}
export default class SlideShow extends Component {
    render() {
        return (
            <Zoom {...zoomOutProperties}>
            {
                slideImages.map((each, index) => (
                    <div  style={{
                        'backgroundImage': `url(${each.src})`,
                        height: '600px',
                        paddingLeft: '130px',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: '100%',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        }}>
                        <h1 className="main-heading">{each.title}</h1>
                        <p className="main-paragarph">{each.description}</p>
                    </div>
                ))
            }
            </Zoom>
        )
    }
}
