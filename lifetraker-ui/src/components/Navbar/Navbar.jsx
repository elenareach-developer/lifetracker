import * as React from "react"
import "./Navbar.css"
import logo from "../../assets/codepath.svg";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="leftNav">
      <Link to="/"> <img src={logo} alt="codepath logo" /></Link>
      </div>
      <div className="righNav">
       <Link to="/exercise">Exersise</Link>
       <Link to="/nutrition">Nutrition</Link>
       <Link to="/sleep">Sleep</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </nav>
  )
}

