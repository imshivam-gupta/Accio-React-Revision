import {  useRef, useState } from "react"
import usePrevious from "../customHooks/usePrevious";
import useThrottle from "../customHooks/useThrottle";

export default function Home(){
    const [inputValue,setInputValue] = useState("");
    // const prevValue = useRef("");
    const prevValue = usePrevious(inputValue);
    const inputRef = useRef(null);

    // useEffect(()=>{
    //     prevValue.current = inputValue;
    // },[inputValue])

    const handleClick = () => {
        inputRef.current.focus();
    }

    const [count,setCount] = useState(0);
    const throttledCount = useThrottle(count,3000);
    
    const incrementCount = () => {
        setCount(count+1)
    }
    return(
        <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                    ref={inputRef}
                />
                <h2> Current Value: {inputValue}</h2>
                <h2> Prev Value: {prevValue}</h2>
                <button onClick={incrementCount}>Focus</button>
                <p>Throttled COunt: {throttledCount}</p>
        </div>

    )
}