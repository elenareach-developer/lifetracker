import React, {useState, useEffect} from "react";
import  Product from "../../Product/Product"
import SleepForm from "../../Forms/SleepForm/SleepForm";
import {useUser} from "../../../Contexts/UserContext"
import { useNavigate} from "react-router-dom"

const Sleep = ()=>{
  const navigate = useNavigate();
  const [isForm, setIsForm] = useState(false);
  const [title, setTitle] = useState("Sleep")
  const { sleep, user}  = useUser();
  const handelClick=(e)=>{
    setIsForm(!isForm);
    setTitle(!isForm?"Add Sleep":"Sleep")
  }
  useEffect(()=>{
    if(!user?.email){
      navigate("/login")
    }
  })

  return(
    <div className="card">
    <h1>{title}  <button onClick={(e)=>handelClick(e)}>{!isForm?"Add Nutirition":"Back to Sleep List"}</button></h1>
     {!isForm && sleep?.map((el,index)=><Product practice={el} key={index}/>)}
     {(isForm||sleep.length==0) && <SleepForm/>}
    
    </div>
  )
}
export default Sleep