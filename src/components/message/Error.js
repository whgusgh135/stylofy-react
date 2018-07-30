import React from "react";

export function Error(props) {
    const error = props.error;

    return (
        error &&
            <div className="message__error">
                {error}
            </div>
    )
}