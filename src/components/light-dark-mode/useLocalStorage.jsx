import { useEffect, useState } from "react";


export default function useLocalStorage(key,defaultValue){

    const [value,setValue] = useState(()=>{
        let currnetValue;
        try{
            currnetValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        }catch(error){
            console.log(error);
            currnetValue = defaultValue;
        }
        return currnetValue;
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    
    return [value,setValue];
}