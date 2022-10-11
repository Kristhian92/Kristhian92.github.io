import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/Dogs App2.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Dogs App3.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/App Dog.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Dogs App</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://pi-dogs-client-7gtq.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                                <a href="https://github.com/Kristhian92/PI-Dogs" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/Videogames App2.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Videogames App3.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Videogames App.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div>
                                <h5 className="ff-jose my-1">Videogames App</h5>
                                <div className="row d-flex justify-content-center">
                                    <a href="https://pi-videogames-client-8q2d.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                                    <a href="https://github.com/Kristhian92/PI-Videogames" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                                </div>
                            </div>
                            <br/>   
                            <br/>
                        </div>


                        <div className="row">
                            <div className="col-6">
                                <h2 className="ff-jose fw-bold ls-2">Something I've Built In Team</h2>
                                <br/>
                            </div>
                            
                        </div>
                           
                        <hr></hr>   
                        <br/>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/Freevents App.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Freevents App2.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Freevents App3.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/Freevents App4.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Freevents App</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://freevents.vercel.app/home" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                                <a href="https://github.com/Kristhian92/freevents" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default MyWork