import React, {useState, useEffect} from "react"
import {useCart} from "../../Contexts/CartContext";
import "./CartItem.css"

export default function CartItem(props) {
  const {addItemToCart, removeItemFromCart} = useCart();
  const [product, setProduct]  = useState(props.product);

  useEffect(()=>{
    setProduct(props.product)
  },[props])

  return (
      <div class="cartItem-Cart-Items">
          <div class="cartItem-image-box">
          <img src={product?.image}  />
          </div>
          <div class="cartItem-about">
          <h1 class="cartItem-title">{product?.name}</h1>
          <h3 class="cartItem-subtitle">{product?.description}</h3>
          </div>
          <div className="cartItem-counter"> 
                  <div className="cartItem-btn" onClick={()=>addItemToCart(product)}>+</div>
                  <div className="cartItem-count">{product?.count}</div>
                  <div className="cartItem-btn" onClick={()=>removeItemFromCart(product)}>-</div>
              </div>
              <div class="cartItem-prices">
                  <div class="cartItem-amount">${product?.price}</div>
              </div>
        </div>
 
  )
}
