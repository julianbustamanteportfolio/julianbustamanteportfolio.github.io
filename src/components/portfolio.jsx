import React from 'react';

//import authpymes
import authpymes from "../img/authpymes.jpg";


//airbnb
import airbnb from "../img/airbnb.JPG";



//landing-curved
import landing from "../img/landing-curved.JPG";


//import simpleShell
import simpleShell from "../img/simple-shell.png";



class Portfolio extends React.Component{

    render(){
        return (
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Check Out My Latest Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="work-box">
                    <a href={authpymes} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={authpymes} alt="" className="img-fluid"/>
                      </div>      </a>
                      <div className="work-content">
                        
                          
                            <h2 className="w-title">AUTHPYMES</h2>
                            <div className="w-more">
                              <p> This is a web application created for the Banco de Occidente based on authentication of natural person and legal representative by means of facial Recognition. With an intuitive interface and easy to use. Deployed on a secure SSL certificate to protected the data of our users.</p>
                              <h6><a href="https://authpymes.vercel.app/" target="_blank" rel="noopener noreferrer">Demo Project</a></h6>
                              <span className="w-ctegory">Technologies: Python ReactJS Django CSS Styled-Component</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                      
                          
                       
                      </div>
                 
                      {/* <a href={vmarine1} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine4} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine5} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine6} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine7} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="work-box">
                    <a href={airbnb} data-lightbox="gallery-aguadeluz">
                      <div className="work-img"> 
                        <img src={airbnb} alt="" className="img-fluid"/>
                        
                      </div> </a>
                      <div className="work-content">
                        
                            <h2 className="w-title">AirBnB Clone</h2>
                            
                            <div className="w-more">
                              <p>Clone of the Website AirBnB, composed by a command interpreter to manipulate data, website static and dynamic, database, and API
                              that provides a communication interface between the front-end and the data. </p>
                            
                              <h6><a href="https://ricardoarquimedes.github.io/AirBnB-clone/" target="_blank" rel="noopener noreferrer">Demo Project</a></h6>
                              <span className="w-ctegory">Technologies: Python Flask HTML5 CSS MySql</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                              
                             
                           
                         
                        </div>
                      </div>
                    
                    {/* <a href={aguaDeLuz1} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz2} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz3} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz4} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="work-box">
                    <a href={landing} data-lightbox="gallery-todo">
                      <div className="work-img">
                        <img src={landing} alt="" className="img-fluid"/>
                      </div> </a>
                      <div className="work-content">
                     
                            <h2 className="w-title">Landing Page with curved sections</h2>
                            <div className="w-more">
                              <p> Frontend Mentor Challenge to Build out a landing page and get it looking as close to the original huddle design. 
                                With optimal layout for the site depending on their device's screen size and hover states for all interactive elements on the page.</p>
                                <h6><a href="https://ricardoarquimedes.github.io/landing-page-curved-sections/" target="_blank" rel="noopener noreferrer">Demo Project</a></h6>
                              <span className="w-ctegory">Technologies: HTML5 CSS3 </span>{/*} / <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          
                          
                          
                      </div>
                   
                   
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="work-box">
                    <a href={simpleShell} data-lightbox="gallery-medlingos">
                      <div className="work-img">
                        <img src={simpleShell} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                       
                            <h2 className="w-title">Simple Shell</h2>
                            <div className="w-more">
                              <p>Creating a simple UNIX command interpreter in C programming language.</p>
                              <br></br>
                              <br></br>
                              <h6><a href="https://github.com/RicardoArquimedes/simple_shell" target="_blank" rel="noopener noreferrer">Demo Project</a></h6>
                              <span className="w-ctegory">Technologies: C Bash/Shell</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                        
                      </div>
                    </a>
                    {/* <a href={medlingos1} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos2} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos3} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos4} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a> */}
                  </div>
                </div>
                
                
                
              </div>
            </div>
          </section>
        );
    }
}

export default Portfolio;