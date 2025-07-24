"use client"
import { useState } from "react";
export default function NunmberComponent(){
    let [age, setAge]= useState(10);
    let handleClick = function (){
       let newAge = age + 1;
       setAge(newAge);
    }
    return (
        <div>
            <p>You are {age} yers old</p>
            <button onClick={handleClick} className="bg-amber-500 px-3 py-1 rounded cursor-pointer">Click Me</button>
        </div>
    );
}
