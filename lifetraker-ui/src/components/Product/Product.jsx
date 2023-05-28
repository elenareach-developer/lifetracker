import React, {useState, useEffect} from "react"
import "./Product.css"
import {useCart} from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import { initialProduct } from "../../data/initialProduct";


export default function Product(props) {
  const {addItemToCart, removeItemFromCart} = useCart();
  const [product, setProduct]  = useState(props.product ||initialProduct)
  const [size, setSize] = useState("product " + props.size)


  useEffect(()=>{
    setProduct(props.product || initialProduct)
    setSize("product " + "bigCart")
  },[props])
  

  return (
    <>
    <section className={size}>
    <div className="Cart-Container">
      <div className="Cart-Items">
      
              <div className="title-box">
              <h1>{product?.name}</h1>
              </div>
            <div className="description-container">
            <div className="description">
                <h1 className="title">{product?.name}</h1>
                <h3 className="subtitle">{product?.description}</h3>

              </div>
            </div>
          </div>
      </div>
    </section>
    </>
  )
}
