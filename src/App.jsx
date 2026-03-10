import { useState } from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/categories";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import Map from "./components/map";

export default function App(){

const [cart,setCart] = useState([]);
const [category,setCategory] = useState("all");

const addToCart = (food)=>{
setCart([...cart,food]);
};

const removeItem = (index)=>{
setCart(cart.filter((item,i)=>i!==index));
};

return(

<div>

<Navbar cartCount={cart.length}/>

<Categories setCategory={setCategory}/>

<FoodList addToCart={addToCart} category={category}/>

<Cart cart={cart} removeItem={removeItem}/>

<Map/>

</div>

);

}