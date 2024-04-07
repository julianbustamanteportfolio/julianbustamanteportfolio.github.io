import React from 'react';
import imageOverlay from "../img/background-banner.jpg";

class Contact extends React.Component{

    render(){
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
                <div className="overlay-mf"></div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    
                        <div id="contact" className="box-shadow-full">
                        <div className="title-box-2 pt-4 pt-md-0">
                                <h5 className="title-left">
                                Contáctame
                                </h5>
                            </div>
                            <div className="more-info">
                                <p className="lead">
                                ¡Me encantaría conectar contigo! 🤝
                                </p>
                                 <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> Medellín, Colombia </li>
                                <li><span class="ion-ios-telephone"></span> +57 301 230 0288</li>
                                <li><span class="ion-email"></span> <a href="mailto:julianbcadavid@gmail.com?Subject=Contact%Me"  target="_blank" rel="noopener noreferrer"> Contáctame a mi correo julianbcadavid@gmail.com o deja un mensaje.</a></li>
                                </ul> 
                            </div>
                            <div className="socials">
                                <ul>
                                

                                <li><a href="https://www.linkedin.com/in/julianbcadavid/" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                                <li><a href="https://github.com/RicardoArquimedes" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                                <li><a href="https://twitter.com/arquimedescq/" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                                <li><a href="https://wa.me/+573012300288" target="_blank" rel="noopener noreferrer"><span className="ico-circle"><i className="ion-social-whatsapp"></i></span></a></li>
                                </ul>
                            </div>
                        <div className="row">
                            <div className="col-md-6">
                            
                               
                         
                            <div>
                               
                            </div>
                            </div>
                            
                        </div>
                  
                    </div>
                    </div>
                </div>
                </div>
                <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="copyright-box">
                        <p className="copyright"> <strong> &copy; Julián Bustamante -  2024  </strong></p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </section>
        );
    }
}

export default Contact;