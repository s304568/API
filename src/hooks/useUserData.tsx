import { useState } from "react";

function useUserData(){
const storeName = localStorage.getItem("name");
const [name, setName] = useState(storeName ? storeName : "");

const saveName = (name:string) => {
    localStorage.setItem("name",name);
    setName(name);
}
    return {
name,
setName:saveName,    

    };
}

export default useUserData;