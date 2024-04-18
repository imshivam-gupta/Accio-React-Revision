import { useEffect,useRef,useState } from "react";

export default function useIdle(timeout){
    const [isNotActive,setisNotActive] = useState(false);
    const timerRef = useRef(null);

    const resetTimer = () => {
        // console.log(timerRef.current);
        clearTimeout(timerRef.current);
        setisNotActive(false);
        timerRef.current = setTimeout(()=>{
            setisNotActive(true);
        },timeout);
    }

    useEffect(()=>{
        window.addEventListener("mousemove",resetTimer);

        return () => {
            window.removeEventListener("mousemove",resetTimer);
        }
    },[])

    return isNotActive;
}