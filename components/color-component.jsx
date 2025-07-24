"use client"
import { useState } from "react";
export default function ColorComponent(){
    let[cl, setCl] = useState("text-amber-400");


    let changeToRed = function(){
        setCl("text-red-400")
    }


    let changeToAmber = function(){
        setCl("text-amber-400")
    }

    let changeToTeal = function(){
        setCl("text-teal-400")
    }







    return(
        <div className="mt-5">
            <p className={cl}> I love interactive javascript</p>
            <button onClick={changeToAmber} className="bg-amber-400 rounded p-1 cursor-pointer">Change color</button>
            <button onClick={changeToRed} className="bg-red-400 mx-3 rouned p-1 cursor-pointer">Change color</button>
            <button onClick={changeToTeal} className="bg-teal-400 rounded p-1 cursor-pointer">Change color</button>
            
        </div>
    );
}