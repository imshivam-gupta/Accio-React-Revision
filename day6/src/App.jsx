import { lazy,Suspense } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css'
import LoadingComp from './components/Loading';
import useLocalStorageState  from './customHooks/useLocalStorageWithExpiry';
import { useOnlineStatus } from './customHooks/useOnlineStatus';
import useIdle from './customHooks/useIdle';
import ThemeProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import UserProvider from './contexts/UserContext';
import PrivateRoutes from './components/PrivateRoutes';

const LazyHomeComponent = lazy(()=>import('./components/HomePage'));

function App() {

  const [name,setName] = useLocalStorageState("","name",0.1);
  const isONline = useOnlineStatus();
  const ISUSERACTIVE= useIdle(5000);
  console.log("online",isONline)
  return (
    <UserProvider>
    <ThemeProvider>
    {/* <input 
    type='text'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    Online status: {isONline? "true" : "false"}
    Idle status: {ISUSERACTIVE? "true" : "false"} */}
    <BrowserRouter>
    <Navbar />
    <div className='bg-white dark:bg-slate-800 text-black dark:text-white'>


      <Suspense fallback={<LoadingComp />}>
        
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<LazyHomeComponent />} path="/" />
          </Route>
          <Route element={<Login />} path='/login' />
        </Routes>
        
      </Suspense>

    
      </div>
      </BrowserRouter>
    </ThemeProvider>
    </UserProvider>
  )
}

// if component is there show else null

export default App
