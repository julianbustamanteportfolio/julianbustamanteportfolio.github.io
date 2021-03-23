import React from 'react';
import myImage from "../img/Ricardo.jpg";
import { Icon } from '@iconify/react';
import logoReact from '@iconify-icons/ion/logo-react';
import logoCss3 from '@iconify-icons/ion/logo-css3';
import bashIcon from '@iconify-icons/logos/bash-icon';
import styledComponents from '@iconify-icons/simple-icons/styled-components';
import gitIcon from '@iconify-icons/simple-icons/git';
import mysqlIcon from '@iconify-icons/simple-icons/mysql';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import pythonIcon from '@iconify-icons/simple-icons/python';
import html5Icon from '@iconify-icons/simple-icons/html5';


class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:"HTML5_skill", content: "HTML5"},
                {id:"CSS3_skill", content: "CSS3",porcentage: "75%", value: "75"},
                {id:"JavaScript_skill", content: "JavaScript",porcentage: "90%", value: "90"},
                {id:"PHP_skill", content: "PHP",porcentage: "70%", value: "70"},
                {id:"ReactJS_skill", content: "ReactJS",porcentage: "80%", value: "80"},
                {id:"Python_skill", content: "Python",porcentage: "75%", value: "75"},
                {id:"VanillaJS_skill", content: "VanillaJS",porcentage: "85%", value: "85"},
                {id:"Wordpress_skill", content: "Wordpress",porcentage: "80%", value: "80"}
            ],
            about_me:[
                {id: "first-p-about",content: "Fullstack Software Developer with more than five years of experience in Information and Communications Technology, Digital Social Media, Customer Service, and Administrative Process."},
                {id: "second-p-about", content: "Great ability to create, propose, solve problems and work in a team, open to learn and share new knowledge, trending programming languages, and technologies."},
                {id: "third-p-about", content: " "}
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
                                    {/* <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>
                                            </div>
                                    
                                        </div>
                                       
                                    </div> */}
                                    
                                        <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>

                                                <div className="title-box-2">
                                                <h5 className="title-left">
                                                About Me
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
                                                <h6 className="title-left">
                                                <a href="https://drive.google.com/file/d/1yqR-5GphzktIz4NFwPRf9epYHDMP8u89/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Check out my resume </a>
                                                </h6>
                                                
                                            </div>
                                <div className="title-box-2">
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
                                
                                <li><span className="ico-circle"><Icon icon={logoReact} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={gitIcon} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={bashIcon} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={styledComponents} className="icon-react"/></span></li>
                                <li><span className="ico-circle"><Icon icon={mysqlIcon} className="icon-react"/></span></li>
                                
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;