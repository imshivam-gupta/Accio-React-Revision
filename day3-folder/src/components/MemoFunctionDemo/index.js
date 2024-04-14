import { useMemo, useState } from "react"
import Todos from "./_components/Todos";

const MemoFunctionDemo = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);

    const handleAddToDo = () => {
        setTodos([...todos,"new todo"]);
    }

    const increment = () =>{
        setCount(count+1);
    }

    return(
        <div>
            <h1>Memo Function Example</h1>
            <div>
                <h2> My todos</h2>
                <Todos todos={todos} />
               
                <button onClick={handleAddToDo} >Add to do</button>
            </div>
<hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}



export default MemoFunctionDemo;