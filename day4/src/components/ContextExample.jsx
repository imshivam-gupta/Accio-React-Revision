import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"

const ContextExample = () => {
    const {count,increment,decrement} = useContext(CounterContext);

    return(
        <div>
            <h1>Counter using Context</h1>
            <p>
                <div>

                    <button onClick={decrement}>-1</button>
                    Counter: {count}
                    <button onClick={increment}>+1</button>
                </div>
            </p>
        </div>
    )
}

export default ContextExample;

/*
- the state of your whole app is tored in an object tree within a single store: ex-cakeshop is store {numofcakes:10}
- the only way to change state is to emit an action that is an object whichc descrtibes what happened. ex-{type:BUY_CAKE}
- to specify how the state tree is transformed by actions you write pure reducers, ex - const reducer = (state,action)=>{
    switch(action.type){
        case BUY_CAKE:
            <return>numofcakes:state.numofcakes-1</return>
    }
}
*/