import React from "react";

export function HairdresserCard(props) {

    const index = props.index + 1;
    const pictureCardClass = "card__picture card__picture--" + index;

    return(
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className={pictureCardClass}>

                    </div>
                </div>
                <div className="card__side card__side--back">
                    <div className="card__box">
                        <p className="card__box--text">{props.hairdresser.name}</p>
                        <a href="#popup" className="btn btn--white">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}