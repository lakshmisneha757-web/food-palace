export default function Navbar({cartCount}){

return(

<div className="navbar">

<h2>🍴 Food Palace</h2>

<div className="cartIcon">
🛒 {cartCount}
</div>

</div>

);

}