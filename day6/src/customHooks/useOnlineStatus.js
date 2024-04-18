import { useEffect, useState } from "react";

export function useOnlineStatus(){
    const [isOnline,setIsOnline] = useState(navigator.onLine);

    const setOnline = () => {
        console.log("i m online")
        setIsOnline(true);
    }

    const setOffline = () => {
        console.log("hey you r offline");
        setIsOnline(false);
    }

    useEffect(()=>{
        window.addEventListener("online",setOnline);
        window.addEventListener("offline",setOffline);

        return () => {
            window.removeEventListener("online",setOnline);
            window.removeEventListener("offline",setOffline);
        }
    },[])

    return isOnline;
}