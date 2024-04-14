import { useState } from 'react'
import './App.css'
import {Provider} from "react-redux"
import store from './rtkit/store'
import PostsReducer from './components/PostsReducer'
function App() {
  // const [count, setCount] = useState(0)
  // setCount(count+1) // 0->1
  // setCOunt((count)=>count+1) // 0->1

  /*
IN react, react compiler waits unitill all code in the event handle has run before processing your state updatesr

setCount(1)
setCount(1)
setCount(1)

// 1

// 0->1->2->3
// setCount((prev)=>prev+1);

prev = 0 curr = 0
setCount(0+1)=> setCount(1), curr = 1
setCOunt(1+1)=>setount(2), curr=2
setCount(2+1)=>setCount(3), curr=3


prev = 0, curr =0
setCount(1), curr = 1
setCount(1), prev =0
setCount(1+1),curr=2

*/

  return (
    // <>
    //   <h1>Batch Update</h1>
    //   <div className="card">
    //     <button onClick={() => 
    //     {
    //       setCount((count)=>count + 1); // 0->1     1 c=1
    //       setCount(count + 1); // 1->2              1
    //       setCount((count)=>count + 1); // 0->1     2, c=2
    //       setCount(count + 5);          //            5
    //       setCount(54);
    //       // setCount(count + 1); // 1->2
    //       // setCount((count)=>count + 1); // 2->3
    //     }
    //     }>
    //       count is {count}
    //     </button>
    //   </div>
      
    // </>

    <Provider store={store}>
      <PostsReducer />
    </Provider>
  )
}

export default App
