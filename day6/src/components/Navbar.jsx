import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { UserContext } from "../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar(){
    const {theme,changeTheme} = useContext(ThemeContext);
    const {user,login,logout} = useContext(UserContext);
    const navigate = useNavigate();

    const themeChangeOnToggle = () => {
        changeTheme(theme);
    }

    const handleAuth = () =>{
        console.log("arrived here");
        if(user){
            console.log(user);
            logout();
            navigate("/login");
            // window.location.replace("http://localhost:5173/login");
            console.log("i should navigate");
        } else{
            login();
            // navigate("/")
        }
    }

    return(
        <nav>
            <NavLink onClick={handleAuth}>
                {user? "Logout" : "Login"}
            </NavLink>
            <button onClick={themeChangeOnToggle}>
                {theme==="dark"?"Light":"Dark"}
            </button>
        </nav>
    )
}