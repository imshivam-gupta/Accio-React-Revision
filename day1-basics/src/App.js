import { useEffect, useState } from 'react';
import './App.css';
import Car from './components/Car';
import Container from './components/Container';
import Header from './components/Header';

export function Child(props){
  // props.setX(7);
  // props are immutable -> read only

  useEffect(()=>{

  },[])
  return (
    <h1>This was props from parent {props.x} </h1>
  )
}



function App() {

  const [x,setX] = useState(5);



  const h1 = <h1 style={{"color":"blue"}}>Hello World {x}</h1>
  return (
    <>
      {h1}
      {/* <Car age={23} x={x} />
      <Child age={23} x={x} setX={setX}/>
      <Container /> */}
      <Header favc="green"/>
    </>
  )
}

export default App;

