import React, { createContext, useContext,useState } from 'react';
import {useProducts} from"./ProductsContext"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const {updateItemInProductList} = useProducts();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalProducts, setTotlaProducts] = useState(0);

  const addItemToCart = itemAdd => {

   let item  = isItemOnCart(itemAdd)?isItemOnCart(itemAdd):itemAdd;
   item.count++;
    setTotlaProducts(totalProducts+1);
    setTotalPrice(totalPrice+Number(itemAdd.price))
    setProducts([... Products, item]);
    updateItemInProductList(item)

  };

  const removeItemFromCart = itemRemove => {
    let isItem = isItemOnCart(itemRemove)
    if(isItem?.count>0){
      isItem.count--;

      setTotlaProducts(totalProducts-1);
      setTotalPrice(totalPrice-Number(itemRemove.price))

      updateItemInProductList(isItem)
      if(isItem.count>0){
          setProducts([... Products, isItem]);
        }else{
          setProducts( Products.filter(item => item.id !== isItem.id));
        }
  }
  };
  const isItemOnCart = isItem =>{
    return  Products.find(item => item.id == isItem.id)
  }
  
  const getItem = item=>{
    let isItem =  isItemOnCart(item)
    return isItem?isItem:item
  }

  const value = {  Products, totalPrice, totalProducts, isItemOnCart, getItem, addItemToCart, removeItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


