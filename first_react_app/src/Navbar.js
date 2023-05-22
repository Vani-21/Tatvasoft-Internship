import appStyle from "./AppStyle.module.css";
import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <div  
  // style={{
  //   ...globleStyles.navbar
  //   }}
     className={appStyle.navbarStyle}
    >
  <Link to="/" style={{marginLeft:5}}>Home</Link>
  <Link to="/apple" style={{marginLeft:10}}>Apple</Link>
  <Link to="/applet" style={{marginLeft:10}} >Applet</Link>
  </div>

    )
}