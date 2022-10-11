import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <div className="col py-3 d-flex align-items-center about-image">

                <div className="container">
                    <div className="row">




                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="font-big text-red slide-in-top">About me</h1>
                                <hr></hr>
                                <p className='slide-in-bottom'>I'm Full-Stack Developer, freelancer and team player  <br></br>
                                    musician and composer,
                                    with one year of experience in web development.
                                </p>
                                <p className='slide-in-bottom'>
                                    Currently looking for new opportunities in industry and willing<br></br>
                                    to work on challenging and diverse projects with the latest technologies.
                                </p>
                                <p className='slide-in-bottom'>
                                    Previously worked as Full stack web developer.<br></br>
                                    The technology I've worked on : <span className="text-red ls-2"> Google Cloud, Auth0, Nodemailer <br></br>
                                        React, Redux, Sql, Sequelize, Material-UI, Html, Css, JavaScript, Bootstrap, Node.Js, Express </span>
                                </p>
                                <p className='slide-in-bottom'>
                                    Currently Learning New Tecnhologys
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                        </div>



                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default About