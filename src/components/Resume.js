import React, { Fragment } from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">KRISTHIAN LIZCANO</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Pilonietalvarez Abogados Laboralistas</h4>
                                <h6 className="blue-label px-2 py-1">Ago 2022 - Sep 2022</h6>
                                <p className="m-0">Frontend Developer · Full-time</p>
                                <p>Colombia, Bucaramanga</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Henry</h4>
                                <h6 className="blue-label px-2 py-1">Ene 2022 - Oct 2022</h6>
                                <p className="m-0">Full Stack Developer · Academic</p>
                                <p>Argentina, Buenos Aires</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Full Stack Web Developer</h4>
                                <h6 className="blue-label px-2 py-1">Ene 2022 - Oct 2022</h6>
                                <p className="m-0">Henry</p>
                                <p>Argentina, Buenos Aires</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Basic Programming</h4>
                                <h6 className="blue-label px-2 py-1">May 2021</h6>
                                <p className="m-0">Platzi</p>
                                <p>Colombia, Bogotá</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.linkedin.com/in/kristhianlizcano/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiLinkedin className="zoom-on-hover"/>
                            </a> 
                            <a href="https://github.com/Kristhian92" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiGithub className="zoom-on-hover"/>
                            </a> 
                           
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume