import { memo } from "react";

const Todos = ({todos,addToDo}) => {
    console.log("child rendered");
    return(
        <>
            {todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
            })}
            <button onClick={addToDo}>Add todo</button>
        </>
    )
}
export default memo(Todos);