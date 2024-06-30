import React from 'react';
import myImage from "../img/julianB.jpg";
import { Icon } from '@iconify/react';
import logoReact from '@iconify-icons/ion/logo-react';
import logoCss3 from '@iconify-icons/ion/logo-css3';
import bashIcon from '@iconify-icons/logos/bash-icon';
import gitIcon from '@iconify-icons/simple-icons/git';
import mysqlIcon from '@iconify-icons/simple-icons/mysql';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import pythonIcon from '@iconify-icons/simple-icons/python';
import html5Icon from '@iconify-icons/simple-icons/html5';
import documentTasks from '@iconify/icons-carbon/document-tasks';
import angularIcon from '@iconify/icons-simple-icons/angular';
import amazonawsIcon from '@iconify/icons-simple-icons/amazonaws';


class About extends React.Component{
    constructor(){
        super();
        this.state = {
            // skills:[
            //     {id:"HTML5_skill", content: "HTML5"},
            //     {id:"CSS3_skill", content: "CSS3",porcentage: "75%", value: "75"},
            //     {id:"JavaScript_skill", content: "JavaScript",porcentage: "90%", value: "90"},
            //     {id:"PHP_skill", content: "PHP",porcentage: "70%", value: "70"},
            //     {id:"ReactJS_skill", content: "ReactJS",porcentage: "80%", value: "80"},
            //     {id:"Python_skill", content: "Python",porcentage: "75%", value: "75"},
            //     {id:"VanillaJS_skill", content: "VanillaJS",porcentage: "85%", value: "85"},
            //     {id:"Wordpress_skill", content: "Wordpress",porcentage: "80%", value: "80"}
            // ],
            about_me:[
                {id: "first-p-about",content: "Soy Media Digital Specialist con experiencia en Planificación de medios digitales, implemento campañas de pauta digital en Facebook Ads, Google Ads, Linkedin Ads y Twitter Ads con el objetivo de crecimiento hacia performance o ventas en e-Commerce. 🛒"},
                {id: "second-p-about", content: "📊 Configuro e Integro eventos de medición y conversión con Google Tag Manager para la obtención de KPI's para el marketing basado en datos. Analizo e interpreto insights, tendencias y datos como resultados de campañas por medio de Google Analytics"},
                {id: "third-p-about", content: "💡También poseo experiencia en compra de medios como Programmatic, Waze y Spotify. Soy autodidacta, proactivo, me gusta la investigación y el pensamiento estratégico. "}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    
                                        <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>

                                                <div className="title-box-2">
                                                <h5 className="title-left">
                                                Sobre Mí
                                                </h5>
                                                
                                            </div>
                                            </div>
                                        
                                            
                                          
                                            
                                            
                                       
                                        
                                    
                                    {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                </div>
                                <div className="title-box-2">
                                                <h5 className="title-left">
                                                
                                                 <a href="https://drive.google.com/drive/folders/1bHSt5Nh_kq-N-S1gyLHE01Bid4IXujMg" target="_blank" rel="noopener noreferrer">
                                                     Descarga mí Curriculum
                                                 
                                                </a>
                                                 
                                                </h5>
                                                <div className="technical" id="resume">
                                                {/* <a href="" target="_blank" rel="noopener noreferrer">  */}
                                <ul>
                                                <li><span className="ico-circle"><Icon icon={documentTasks}  className="icon-react"/></span></li>
                                                </ul>
                                                {/* </a> */}
                                                </div>
                                                

                                            </div>
                                {/* <div className="title-box-2">
                                                <h5 className="title-left">
                                                Technical Skills
                                                </h5>
                                                
                                            </div>
                                <div className="technical">
                                <ul>
                                
                                <li><span className="ico-circle"><Icon icon={javascriptIcon}  className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={html5Icon}  className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={logoCss3}  className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={pythonIcon}  className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={mysqlIcon} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={logoReact} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={gitIcon} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={bashIcon} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={angularIcon} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={amazonawsIcon} className="icon-react"/></span></li>
                                
                                </ul>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;