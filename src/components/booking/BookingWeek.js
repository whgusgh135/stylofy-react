import React from "react";


export function BookingWeek(props) {
    const week = props.week;
    const options = { weekday: 'short', month: 'long', day: 'numeric' };

    return (
        <h1>{week[0].toLocaleDateString("en-US", options)} 
             ~ {week[6].toLocaleDateString("en-US", options)}
        </h1>
    )
}