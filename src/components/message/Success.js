import React from "react";

export function Success(props) {
    const success = props.success;

    return (
        success &&
            <div className="message__success">
                {success}
            </div>
    )
}