import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes(){
    const {user} = useContext(UserContext);

    if(user) return <Outlet />
    else return <Navigate to={"/login"} />
}