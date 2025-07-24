
let home_link = {
    path: "/",
    label: "Home",
};

let calculator_link = {
    path: "/calculator",
    label: "Calculator",
};


let profile_link = {
    path: "/profile",
    label: "My profile",
};


let more_link = {
    path: "/more",
    label: "More items",
};



let links = [home_link, calculator_link, profile_link, more_link, {path: "/api", label: "My Api Page"}]

let mapLinkHandler = function (data, index){
    return <li key={index}><a className="px-3 py-2 block hover:bg-amber-400" href={data.path}>{data.label}</a></li>;
};


export default function NavComponent(){
    return <ul className="flex p-3 shadow justify-end">{links.map(mapLinkHandler)}</ul>
}