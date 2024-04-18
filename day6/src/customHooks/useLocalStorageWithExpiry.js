import { useEffect, useState } from "react";

export default function useLocalStorageStateWithExpiry(initialValue,key,expiryInMinutes=0.01){
    const storedValueJson = localStorage.getItem(key);
    const now = new Date().getTime();
    let initialStoredValue = initialValue;

    if(storedValueJson){
        const {value,expiry} = JSON.parse(storedValueJson);
        if(now<expiry){
            initialStoredValue = value;
        }
    }

    const [storedValue,setStoredValue] = useState(initialStoredValue);

    useEffect(()=>{
        if(storedValue===null){
            localStorage.removeItem(key);
        } else{
            const expiry = new Date().getTime() + expiryInMinutes*60*1000;
            localStorage.setItem(key,JSON.stringify({value:storedValue,expiry}))
        }

    },[key,storedValue,expiryInMinutes]);

    return [storedValue,setStoredValue];
}

// {
//     value:
//   expury : date to expire
// }

