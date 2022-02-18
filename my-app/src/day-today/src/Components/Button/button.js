import React from "react";
import './style.css';

function Button(props){
    return(
        <button>
            {props.text}
        </button>
    );
}

export default Button;