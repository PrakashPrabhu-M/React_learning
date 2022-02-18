import React from "react";
import './style.css';
import Heading from "../Components/Heading/heading";

function HeadingSection(props){
    return(
        <div className="head">
            <Heading text={props.text} />
        </div>
    );
}

export default HeadingSection;