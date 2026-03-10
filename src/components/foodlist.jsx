import { useEffect, useState } from "react";

export default function FoodList({addToCart,category}){

const [foods,setFoods] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{

fetch("https://api.spoonacular.com/recipes/complexSearch?query=indian&number=10&apiKey=174d16f837094e1d86d9952df6f4055d")
.then(res=>res.json())
.then(data=>{

const spoonFoods = data.results.map(item=>({
name:item.title,
image:item.image,
price:250,
type:item.title.toLowerCase()
}));

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
.then(res=>res.json())
.then(mealData=>{

const mealFoods = mealData.meals.map(meal=>({
name:meal.strMeal,
image:meal.strMealThumb,
price:200,
type:meal.strMeal.toLowerCase()
}));

setFoods([...spoonFoods,...mealFoods]);

});

});

},[]);

const filteredFoods = foods.filter(food=>{

const matchSearch = food.name.toLowerCase().includes(search.toLowerCase());

if(category==="all") return matchSearch;

if(category==="veg") return matchSearch && food.type.includes("paneer");

if(category==="nonveg") return matchSearch && food.type.includes("chicken");

if(category==="desserts") return matchSearch && food.type.includes("cake");

if(category==="starters") return matchSearch && food.type.includes("roll");

if(category==="mocktails") return matchSearch && food.type.includes("drink");

return matchSearch;

});

return(

<div>

<input
className="search"
placeholder="Search food..."
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="menu">

{filteredFoods.map((food,index)=>(

<div className="card" key={index}>

<img src={food.image}/>

<h3>{food.name}</h3>

<p>₹{food.price}</p>

<button onClick={()=>addToCart(food)}>
Add to Cart
</button>

</div>

))}

</div>

</div>

);

}