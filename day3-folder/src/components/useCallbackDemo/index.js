import { useCallback, useMemo, useState } from "react"
import Todos from "./_components/Todos";
import { Link } from "react-router-dom";

const UseCallbackDemo = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);

    
    // const handleAddToDo = useCallback(()=>setTodos([...todos,"new todo"]),[todos]);
    // const handleAddToDo = () => {
    //     setTodos([...todos,"new todo"]);
    // }

    const increment = () =>{
        setCount(count+1);
    }

    const handleAddToDo = useCallback(()=>setTodos([...todos,"new todo"]),[todos])

    // const heavyVar = expensiveCalc(count);
    // const heavyVar = useMemo(()=>expensiveCalc(count),[count])
    // const [heavyVar,setHeavyVar] = useState(()=>expensiveCalc(count));
    const x = "/";
    return(
        <div>
            <h1>Use Callback Example</h1>
            <Link to={"/"} reloadDocument>Go to home</Link>
            <div>
                <h2> My todos</h2>
                <Todos todos={todos} addToDo={handleAddToDo}/>
            </div>
<hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                {/* {heavyVar} */}
            </div>
        </div>
    )
}



export default UseCallbackDemo;