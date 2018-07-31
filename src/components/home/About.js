import React from 'react';
import Image1 from '../../styles/img/hairstyle-1.jpg';
import Image2 from '../../styles/img/hairstyle-2.jpg';

export function About() {
    return(
        <section className="section-about">
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-secondary u-margin-bottom-small">
                        Experience The Unique Styling Just For You
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium laudantium sapiente deleniti sequi totam fugiat in perferendis est nostrum doloribus, veniam nisi iure dolores numquam veritatis, dolorem ad rerum et.
                    </p>
                </div>

                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={Image1} alt="Girl 1" className="composition__photo composition__photo--p1" />
                        <img src={Image2} alt="Girl 2" className="composition__photo composition__photo--p2" />                  
                    </div>
                </div>
            </div>
        </section>
    )
}