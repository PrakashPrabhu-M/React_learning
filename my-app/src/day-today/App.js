import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function App(props){
    let c=0;//using normal variables like these are resetted when rerendered
    // console.log(c);
    const [state,setState]=useState(1);

    const handleClick=(event)=>{
        setState(event.target.value);
        ++c;
        console.log(state,'-')
    }

    return(
        <div>
            <input type='text' onChange={(e)=>handleClick(e)} value={state}></input>
        </div>
    );
    
}