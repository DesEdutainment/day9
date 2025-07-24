import NavComponent from "@/components/nav";

let city;// statement--- a declaration statement
city = "Asaba"; // assignment statement
var state; // declaration 
state = "Delta" // assignment
const country = "United Kindgdom"; // both assignment and declaration
let age = 10;


let names =["Shammah", "Darlington", "Dogun"];




let changeAge = function (){

    if (age > 0)
        --age;
}

let handleFunction = function (data, index){
    return <p key={index} className="bg-amber-400 p-2 my-2 font-bold animate-pulse">{data}</p>;
}

let changeCity = function (){
    city ="PortHarcourt";
}






export default function Syntax(){
    return(
        <div>
            <NavComponent></NavComponent>
            <h1>We will be learning more about javascript {city}</h1>
            <p>{city}</p>
            <p>{state}</p>
            <p>{country}</p>
            <p>{age}</p>
            <p>{changeCity()}</p>
            <p>{changeAge()}</p>
             {names.map(handleFunction)}
        </div>
    );
   

    
}

