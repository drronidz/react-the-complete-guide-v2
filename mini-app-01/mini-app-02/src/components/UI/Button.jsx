import React from "react";
import './Button.css'



const Button = props => {
    return (
        <button className="button" type={props.type || 'button'} onClick={props.onClickHandler}>
            {props.children}
        </button>
    )
}

export default Button