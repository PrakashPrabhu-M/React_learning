import React, {useState} from "react";

const superhero=[
    {id:1, hero: 'spider-man'},
    {id:2, hero: 'superman'},
    {id:3, hero: 'batman'}
];

export default function Superheros(){
    return(
        <div>
            {superhero.map((item)=>{
                return(<p>{item.hero}</p>);
            })}
        </div>
    );
}