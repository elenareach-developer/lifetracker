import React, {useState, useEffect} from "react"
import {useCart} from "../../Contexts/CartContext";
import "./CartItem.css"
import { initialProduct } from "../../data/initialProduct";

export default function CartItem(props) {
  const {addItemToCart, removeItemFromCart} = useCart();
  const [product, setProduct]  = useState(props.product||initialProduct);

  useEffect(()=>{
    setProduct(props.product||initialProduct)
  },[props])

  return (
      <div className="cartItem-Cart-Items">
          <div className="cartItem-image-box">
          <img src={product?.image}  />
          </div>
          <div className="cartItem-about">
          <h1 className="cartItem-title">{product?.name}</h1>
          <h3 className="cartItem-subtitle">{product?.description}</h3>
          </div>
          <div className="cartItem-counter"> 
                  <div className="cartItem-btn" onClick={()=>addItemToCart(product)}>+</div>
                  <div className="cartItem-count">{product?.count}</div>
                  <div className="cartItem-btn" onClick={()=>removeItemFromCart(product)}>-</div>
              </div>
              <div className="cartItem-prices">
                  <div className="cartItem-amount">${product?.price}</div>
              </div>
        </div>
 
  )
}
