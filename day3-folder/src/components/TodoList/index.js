import { useCallback, useMemo, useState } from "react"
import Todos from "./_components/Todos";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [todos,setTodos] = useState([]);

    return(
        <div>
            <h1>Use Callback Example</h1>
           
                <h2> My todos</h2>
                <Todos todos={todos} addToDo={handleAddToDo}/>
        </div>
    )
}



export default TodoList;