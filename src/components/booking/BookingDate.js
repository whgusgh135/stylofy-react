import React from "react";


export function BookingDate(props) {
    const day = props.day;
    const options = { weekday: 'short', month: 'long', day: 'numeric' };

    return (
        <h1>{day.toLocaleDateString("en-US", options)} 
        </h1>
    )
}