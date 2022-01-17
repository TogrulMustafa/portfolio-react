import React from 'react'
import seo from '../img/seo.jpg'
import web from '../img/web.jpg'
import smm from '../img/smm.jpg'
import helpdesk from '../img/helpdesk.png'

const Services = _ => {
    return (
        <div className="service-background">
        <div className="container">
            <h2 className="service-title">My Services</h2>
            <div className="row services">
                <div className="service-item">
                    <div className="kard">
                        <div className="kard-front">
                            <i className="fab fa-google"></i>
                            <h5>Seo</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a accusamus fugiat praesentium inventore assumenda.</p>
                        </div>
                        <div className="kard-back">
                            <img src={seo}/>
                        </div>
                    </div>
                </div>
                <div className="service-item">
                    <div className="kard">
                        <div className="kard-front">
                            <i className="far fa-file-code"></i>
                            <h5>Web</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a accusamus fugiat praesentium inventore assumenda.</p>
                        </div>
                        <div className="kard-back">
                            <img src={web}/>
                        </div>
                    </div>
                </div>
                <div className="service-item">
                    <div className="kard">
                        <div className="kard-front">
                            <i className="fab fa-facebook-f"></i>
                            <h5>Facebook smm</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a accusamus fugiat praesentium inventore assumenda.</p>
                        </div>
                        <div className="kard-back">
                            <img src={smm}/>
                        </div>
                    </div>
                </div>
                <div className="service-item">
                    <div className="kard">
                        <div className="kard-front">
                            <i className="fas fa-desktop"></i>
                            <h5>IT Helpdesk</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a accusamus fugiat praesentium inventore assumenda.</p>
                        </div>
                        <div className="kard-back">
                            <img src={helpdesk}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Services
