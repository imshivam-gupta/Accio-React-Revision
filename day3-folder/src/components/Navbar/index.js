import {  Link, NavLink } from "react-router-dom";
// a.active{}
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
        <NavLink 
        to={"/"}>
          
          Use Memo Demo
          </NavLink>
        </li>
        <li>
          <NavLink to={"/memo"}>Memo Function</NavLink>
        </li>
        <li>
          <NavLink to="/usecallback">Use Callback Demo</NavLink>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;