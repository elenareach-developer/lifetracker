import React, {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {initialProduct} from "../../data/initialProduct"
import Hero from "../Hero/Hero"
import Footer from "../Footer/Footer"
import About from "../About/About"
import "./App.css"
import Exercise from"../Pages/Exercise/Exercise";
import Sleep from"../Pages/Sleep/Sleep";
import Nutrition from"../Pages/Nutrition/Nutrition";
import Login from"../Pages/Login/Login";
import Registration from"../Pages/Registration/Registration";
import Home from"../Pages/Home/Home";
import Navbar from"../Navbar/Navbar"
import {useProducts} from "../../Contexts/ProductsContext";
import {initialData} from "../../data/initialData"



export default function App() {
  const {addItemsToProductList} = useProducts();
  const [eror, setError] = useState();
  const [isFetching, setIsFetching] = useState(false)
  const [appState, setAppState] = useState(initialData.user);
  const [exercise, setExercise] = useState(initialData.exercise);
  const [nutrition, setNutrition] = useState(initialData.nutrition);
  const [auth, setAuth]= useState(initialData.user);
  const [sleep, setSleep]= useState(initialData.sleep);
     
  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get("http://localhost:3001/store");
        if (initialProduct ) {
         await  addItemsToProductList(initialProduct );
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="app">
       <BrowserRouter>
  <div className="main">
       <Navbar />
       <div className="row">
          <main>
               
                <Routes>
                            <Route path="/" element={ <Home/>}/>
                            <Route exact path="/exercise" element={<Exercise auth={auth} exercise={exercise}  setExercise={setExercise}/>} />s
                            <Route exact path="/nutrition" element={<Nutrition auth={auth} exercise={nutrition}  setNutrition={setNutrition}/>} />
                            <Route exact path="/sleep" element={<Sleep auth={auth} exercise={sleep}  setSleep={setSleep}/>} />
                            <Route exact path="/login" element={<Login auth={auth}  setAuth={setAuth}/>} />
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
