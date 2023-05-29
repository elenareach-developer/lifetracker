import React, {useEffect} from "react";
import {Link} from "react-router-dom"
import {useUser} from "../../../Contexts/UserContext"
import {useNavigate} from "react-router-dom";
import NavbarLinks from "../../NavLinks/NavbarLinks"



const Portal = ()=>{
  const {user}  = useUser();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user.email){
      navigate("/login")
    }
  },[])
  return(
    <>   
      <h3 id="about">Welcome to {user.first_name} Portal</h3>
          <div className="card">
              <NavbarLinks/>
          </div>
    </>
  )
}
export default Portal