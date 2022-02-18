import React from "react";
import './style.css'

export default function Heading(props){
    return(
        <h1>
            {props.text}
        </h1>
    );
}