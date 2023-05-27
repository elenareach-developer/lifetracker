import * as React from "react"
import "./Cart.css"
import {useCart} from "../../Contexts/CartContext";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const {cartItems,addItemToCart, removeItemFromCart} = useCart();
  return (
    <div class="Cart-Container-main">
      <div class="Heade-main">
        <h3 class="Heading-main">Shopping Cart</h3>
        <h5 class="Action-main">Remove all</h5>
    </div>
    {cartItems.map(el=>(<CartItem product={el}/>))}
    </div>
  )
}
