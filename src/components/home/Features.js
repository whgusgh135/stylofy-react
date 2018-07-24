import React from 'react';

export function Features() {
    return (
        <section className="section-features">
            <div className="u-center-text u-margin-bottom-big">
                <h3 className="heading-tertiary">Our Services</h3>
            </div>

            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <h4 className="feature-box__heading u-margin-bottom-small">Men's Cut</h4>
                        <h4 className="feature-box__price u-margin-bottom-small">$25</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <h4 className="feature-box__heading u-margin-bottom-small">Women's Cut</h4>
                        <h4 className="feature-box__price u-margin-bottom-small">$35</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <h4 className="feature-box__heading u-margin-bottom-small">Perm</h4>
                        <h4 className="feature-box__price u-margin-bottom-small">$75</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <h4 className="feature-box__heading u-margin-bottom-small">Dye</h4>
                        <h4 className="feature-box__price u-margin-bottom-small">$45</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}