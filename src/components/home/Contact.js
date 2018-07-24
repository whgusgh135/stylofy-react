import React from 'react';
import logo from '../../styles/img/logo-white.png';

export function Contact() {
    return(
        <section className="section-contact">
            <div className="row">
                <div className="col-1-of-3">
                    <img src={logo} alt="Logo" className="contact__logo" />
                </div>
                <div className="col-1-of-3">
                    <div className="contact__text-box">
                        <h4>Address:</h4>
                        <p>7/77 Imaginary Street</p>
                        <p>Auckland CBD</p>
                        <p>Auckland</p>
                        <p>1010</p>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="contact__text-box">
                        <h4>Opening Hours:</h4>
                        <p>Monday-Friday  11am to 7pm</p>
                        <p>Saturday-Sunday  10am to 8pm</p>
                        <br/>
                        <h4>Phone:</h4>
                        <p>382-3829</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}