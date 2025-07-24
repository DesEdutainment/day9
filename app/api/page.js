import NavComponent from "@/components/nav";
import NumberComponent from "@/components/number-componeent";
import ColorComponent from "@/components/color-component";
import InputComponent from "@/components/input-component";


export default async function APIPage(){
    let num = Math.random()*100;
    num = Math.ceil(num);
    let meaning = "please check your internet connection"

try{
let res = await fetch("http://numbersapi.com/"+num);
meaning = res.text();
}

catch {}
    return (
        <div>
        <NavComponent></NavComponent>
        <p>We Will be learning about APIs and using some free APIs here</p>
        <NumberComponent/>
        <ColorComponent/>
        <InputComponent/>

        </div>
    )
}