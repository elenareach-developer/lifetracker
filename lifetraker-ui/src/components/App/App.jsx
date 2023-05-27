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
import Search from"../Search/Search"
import Navbar from"../Navbar/Navbar"
import {useProducts} from "../../Contexts/ProductsContext";



export default function App() {
  const {addItemsToProductList} = useProducts();
  const [eror, setError] = useState();
  const [isFetching, setIsFetching] = useState(false)
     
  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
       /// const res = await axios.get("http://localhost:3001/store");
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
       <div className="card greenBg noTop">
            <Hero />
          </div>
          <main>
          <div className="card">
            <Search />
          </div>
          <h3 id="sell">Best Selling Products</h3>
                <div className="card add_scroll">
                <Routes>
                            <Route path="/" element={ <Home/>}/>
                            <Route exact path="/exercise" element={<Exercise />} />s
                            <Route exact path="/nutrition" element={<Nutrition />} />
                            <Route exact path="/sleep" element={<Sleep />} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/registration" element={<Registration />} />
                            
              </Routes>
          </div>
          </main>
          <h3 id="about">About</h3>
          <div className="card">
            <About />
          </div>
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
