import React, {useState, useEffect} from "react";
import  Product from "../../Product/Product"
import ExerciseForm from "../../Forms/ExerciseFrom/ExerciseForm";


const Exercise = (props)=>{
  const [isForm, setIsForm] = useState(false);
  const [title, setTitle] = useState("Exercise")
  const [exerciseList, setExerciseList] = useState(props.exercise)
  const handelClick=(e)=>{
    setIsForm(!isForm);
    setTitle(!isForm?"Add Exercise":"Exercise")
  }
useEffect(()=>{
  setExerciseList(props.exercise)
})
  return(
    <div className="card">
    <h1>{title}  <button onClick={(e)=>handelClick(e)}>{!isForm?"Add Exercise":"Back to Exercises"}</button></h1>
     {!isForm && exerciseList.map(el=><Product props={el}/>)}
     {isForm && <ExerciseForm/>}
    
    </div>
  )
}
export default Exercise