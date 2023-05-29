import React, {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {initialProduct} from "../../data/initialProduct"
import Footer from "../Footer/Footer"
import "./App.css"
import Exercise from"../Pages/Exercise/Exercise";
import Sleep from"../Pages/Sleep/Sleep";
import Nutrition from"../Pages/Nutrition/Nutrition";
import Login from"../Pages/Login/Login";
import Registration from"../Pages/Registration/Registration";
import Home from"../Pages/Home/Home";
import Portal from"../Pages/Portal/Portal";
import Navbar from"../Navbar/Navbar"
import {useUser} from "../../Contexts/UserContext";
import {initialData} from "../../data/initialData";
import axios from 'axios';



export default function App() {
  const { authCred, isFetch, setisFetch,isFetching, user,  setUser, setExercise, setNutrition, setSleep,fetchUser} = useUser();
  const [appState, setAppState] = useState(initialData.user);
 
  return (
    <div className="app">
       <BrowserRouter>
  <div className="main">
       <Navbar />
       <div className="row">
          <main>
               
                <Routes>
                            <Route path="/" element={ <Home/>}/>
                            <Route exact path="/portal" element={<Portal />} />
                            <Route exact path="/exercise" element={<Exercise  />} />
                            <Route exact path="/nutrition" element={<Nutrition />} />
                            <Route exact path="/sleep" element={<Sleep/>} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/registration" element={<Registration />} />
                            
              </Routes>
          </main>
         
          <h3 id="contactUs">Contact Us</h3>
          <div className="card">
            <Footer />
          </div>
        </div>
   </div>
   </BrowserRouter>
    </div>
  )
}
