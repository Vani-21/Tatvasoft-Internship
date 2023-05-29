import appStyle from "../Styles/AppStyle.module.css";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <div  
  // style={{
  //   ...globleStyles.navbar
  //   }}
     className={appStyle.navbar}
    >
  <Link to="/" style={{marginLeft:5}} className='link'>Home</Link>
  <Link to="/login" style={{marginLeft:10}} className='link'>Login</Link>
  <Link to="/register" style={{marginLeft:10}} className='link'>Register</Link>
  <Link to="/applet" style={{marginLeft:10}} className='link' >Applet</Link>
  </div>

    )
}