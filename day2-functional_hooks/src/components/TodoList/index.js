import React, { useState } from "react";
import './x.css'
import styles from './index.module.css'
const TodoList = ({todos,handleAddToDo,setTodos}) => {
    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const x = () => {
        if(inputValue.trim()!==''){
            handleAddToDo(inputValue);
        // setTodos([...todos,inputValue]);
        setInputValue('');
        }
    }


    return(
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a todo.." className={`${styles.bgred} col` }/>
            <button onClick={x}>Add Todo</button>
{/* 
            {todos.length==0?<h2>No task to do for now</h2> : (todos.length==1) ? <h2>One task is there add more and you can see</h2>:
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>} */}
            {/* ?componet:null */}

            {todos.length>0 && <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>}
        </div>
    )
    
}

export default TodoList;