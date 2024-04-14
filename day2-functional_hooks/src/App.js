// import { useEffect, useReducer, useState } from 'react';
// import './App.css';
// import { useLocalStorageState } from './customHook';

// export function Child({x,persons=["sample 1"]}){
//   const [count,setCount] = useState(0);
//   const [name,setName] = useState("Shivam");
  
//   const func = () => {
//     console.log("ext function used inside");
//     // setCount(count+1);
//   }
//   const func2 = () => {
//     // console.log("Component did mount");
//     // // setCount(count+1);

//     let timer = setTimeout(()=>{
//       setCount(count+1);
//     },1000);

//     return ()=> clearTimeout(timer);
//   }

//   useEffect(func,[count]);

//   // replicate component did mount ??
//   useEffect(func2,[]);

//   // componentDidUpdate due to a specific depency

  
//   return (
//     <>
//       <h2>Use state demo</h2>
//       <p>Count {count}</p>
//       <p>Name {name}</p>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//       <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//       <button onClick={()=>{setName("x")}}>cHnage name</button>
      
//     </>
//   )
// }

// // Child.defaultProps = {
// //   persons: ["sample 1"]
// // }

// // useState hook

// const useStateHookExample = () => {
//   const [count,setCount] = useState(0);

//   const increment = () => {
//     setCount(count+1);
//   }

//   const decrement = () => {
//     setCount(count-1);
//   }

//   const reset= () => {
//     setCount(0);
//   }
//   return(
//     <div>
//       <h2>Counter</h2>
//       <p>Count {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset Counter</button>
//     </div>
//   )
// }

// const reducer = (state,action) => {
//   switch(action.type){
//     case 'increment':
//       return {count: state.count+1}
//     case 'decrement':
//       return {count: state.count-1}
//     case 'reset':
//         return {count: 0}
//   }
// }

// const UseReducerHook = () => {
//   const [state,dispatch] = useReducer(reducer,{count:0});

//   const increment = () => {
//     dispatch({type: 'increment'})
//   }

//   const decrement = () => {
//     dispatch({type: 'decrement'})
//   }

//   const reset= () => {
//     dispatch({type: 'reset'})
//   }
  

  
//   return(
//     <div>
//       <h2>Counter</h2>
//       <p>Count {state.count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset Counter</button>
//     </div>
//   )
// }

// const CustomHookExample = () => {
//   const [name,setName] = useLocalStorageState('Shivam Gupta','username');

//   return(
//     <div>
//       <label>Enter your name</label>
//       <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />

//       <p>Hello {name}</p>
//     </div>
//   )
// }

// function App() {
// return(
//   // <Child />
//   <CustomHookExample />
// )
 
// }

// export default App;

import React  from "react";
import { useLocalStorageState } from "./customHook";
import TodoList from "./components/TodoList";

function App(){
  const [todos,setTodos] = useLocalStorageState([],'todos');

  const handleAddToDo = (newTodo) => {
    setTodos([...todos,newTodo]);
  }

  const handleTodo = (index) => {
    const newTodos = todos.filter((todo,i)=>i!==index);
    setTodos(newTodos);
  }

  return(
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoList todos={todos} handleAddToDo={handleAddToDo} setTodos={setTodos}/>
      </header>
    </div>
  )
}

export default App;