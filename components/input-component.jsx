"use client"

import {useState} from "react"

export default function InputComponent(){
    let [answer, setAnswer] =useState ("");

    let handler = function (evt){
        if (evt.key == "Enter"){
            setAnswer(evt.target.value);
        }
        
    };



    return(
        <form action="/question" method = "POST">
            <p>What is the name of your president ? {answer} </p>
            <input className="border" onKeyDown={handler}/>
            <p>Select end of tenure</p>
            <select>
                <option>2027</option>
                 <option>2030</option>
                  <option>2035</option>
                   <option>2040</option>
            </select>
            <br />
            <button>Send Request</button>
        </form>
    );
}