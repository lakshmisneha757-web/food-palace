import { useState } from "react";

export default function Cart({ cart, removeItem }) {

const [message,setMessage] = useState("");

const total = cart.reduce((sum,item)=>sum+item.price,0);


/* POST ORDER API */

const placeOrder = async () => {

try{

const response = await fetch("https://jsonplaceholder.typicode.com/posts",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
orderItems:cart,
totalAmount:total
})

});

const data = await response.json();

setMessage("Order placed successfully! Order ID: "+data.id);

}catch(error){

setMessage("Order failed");

}

};


return(

<div className="cart">

<h2>🛒 Cart</h2>

{cart.length===0 ?

<p>No items in cart</p>

:

cart.map((item,index)=>(

<div className="cartItem" key={index}>

<img src={item.image} />

<p>{item.name}</p>

<p>₹{item.price}</p>

<button onClick={()=>removeItem(index)}>
Delete
</button>

</div>

))
}

<h3>Total: ₹{total}</h3>

<button className="orderBtn" onClick={placeOrder}>
Place Order
</button>

<p>{message}</p>

</div>

);

}