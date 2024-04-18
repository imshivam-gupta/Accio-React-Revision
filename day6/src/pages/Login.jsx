import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    console.log("i was here");

    const handleAuth = () => {
        login();
        navigate("/");
        // window.location.replace("http://localhost:5173");
    }

    return(
        <div>
            <h1>Login</h1>
            <button onClick={handleAuth}>Login</button>
        </div>
    )
}