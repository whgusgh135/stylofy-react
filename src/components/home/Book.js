import React from 'react';

export function Book() {
    return (
        <section className="section-book">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Our Stylists
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">

                            </div>
                        </div>
                        <div className="card__side card__side--back">
                            <div className="card__box">
                                <p className="card__box--text">The Man</p>
                                <a href="#popup" className="btn btn--white">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                
                            </div>
                        </div>
                        <div className="card__side card__side--back">
                            <div className="card__box">
                                <p className="card__box--text">Angela Lalalala</p>
                                <a href="#popup" className="btn btn--white">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                                
                            </div>
                        </div>
                        <div className="card__side card__side--back">
                                <div className="card__box">
                                    <p className="card__box--text">Hipster Jay</p>
                                    <a href="#popup" className="btn btn--white">Book Now</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}