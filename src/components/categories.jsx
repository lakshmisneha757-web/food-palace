export default function Categories({setCategory}){

return(

<div className="categories">

<button onClick={()=>setCategory("all")}>All</button>

<button onClick={()=>setCategory("veg")}>Veg</button>

<button onClick={()=>setCategory("nonveg")}>Non Veg</button>

<button onClick={()=>setCategory("desserts")}>Desserts</button>

<button onClick={()=>setCategory("starters")}>Starters</button>

<button onClick={()=>setCategory("mocktails")}>Mocktails</button>

</div>

);

}