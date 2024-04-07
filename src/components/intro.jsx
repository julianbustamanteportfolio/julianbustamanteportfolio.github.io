import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../img/background-banner.jpg'

class Intro extends React.Component{
    render(){
        return (
<div id="home" className="intro route bg-image" style={{backgroundImage: `url(${backgroundImage})`}}>
              {/* <div id="home" className="intro route bg-image background"> */}

            {/* <div className="overlay-intro"></div> */}
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h1 className="intro-title mb-4">Hola, soy Julián Bustamante</h1>
                  <p className="intro-subtitle"><span className="text-slider-items">
                    </span><strong className="text-slider"><Typed strings={['Paid Media Specialist', 'Traffiker', 'Planner Strategy', 'Media Buyer']} typeSpeed = {80} backDelay = {1100} backSpeed = {30} loop/></strong></p>
                  <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Portafolio</a></p>
                </div>
              </div>
            </div>
            </div>
        
        );
    }
}

export default Intro;