import { useMemo, useState } from "react"

const UseMemoDemo = () => {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);

    const handleAddToDo = () => {
        setTodos([...todos,"new todo"]);
    }

    const increment = () =>{
        setCount(count+1);
    }

    // const heavyVar = expensiveCalc(count);
    const heavyVar = useMemo(()=>expensiveCalc(count),[count])
    // const [heavyVar,setHeavyVar] = useState(()=>expensiveCalc(count));
    return(
        <div>
            <h1>Use Memo Example</h1>
            <div>
                <h2> My todos</h2>
                {todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={handleAddToDo} >Add to do</button>
            </div>
<hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                {heavyVar}
            </div>
        </div>
    )
}

const expensiveCalc = (num) => {
    console.log("Calculating...");
    for(let i=0;i<1000000000;i++){
        num+=1;
    }

    return num;
}

export default UseMemoDemo;