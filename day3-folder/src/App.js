import { BrowserRouter,Routes,Route,useParams } from "react-router-dom";
import MemoFunctionDemo from "./components/MemoFunctionDemo";
import UseMemoDemo from "./components/UseMemoExample";
import UseCallbackDemo from "./components/useCallbackDemo";
import Navbar from "./components/Navbar";
import AdminDashBOard from "./components/AdminDashboard";
import Home from "./components/AdminDashboard/home";

function TodoPost(){
  const {id} = useParams();
  return(
    <p>This is post with id {id}</p>
  )
}

function App() {
  // console.log();
  const what_to_render = window.location.host.split('.')[0]
  // if()

  if(what_to_render==="admin"){
    return(
      <h1>Admin</h1>
    )
  }

  else return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminDashBOard />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/todos/:id" element={<TodoPost />} />
        <Route path="/" element={<UseMemoDemo />} />
        <Route path="/memo" element={<MemoFunctionDemo />} />
        <Route path="/usecallback" element={<UseCallbackDemo />} />

      </Routes>
       {/* <UseMemoDemo /> */}
       {/* <MemoFunctionDemo /> */}
      {/* <UseCallbackDemo /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
