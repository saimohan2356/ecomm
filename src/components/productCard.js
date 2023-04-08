import { useContext } from "react";
import "./productCard.scss";
import cartContext from "../context/cartContext";
import {addToCart,removeFromCart} from "../utiils/cartmanagement";
const ProductCard=({product})=>{
  const {cart,setCart}=useContext(cartContext);
    const baseUrl="https://chawkbazar.vercel.app/_next/image?url=";
  return(
    <div className="card">
        <img className="cardimg" src={baseUrl+product.image.thumbnail+"&w=384&q=100"} alt=".."/>
        <div style={{padding:"1rem"}} className="itemdetails">
        <p style={{fontSize:".95rem",fontWeight:"600"}}> {product.name}</p>
        <p style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"250px"}}>{product.description}</p>
             <div style={{display:"flex",justifyContent:"space-between",width:"35%"}}>
              <p className="price" style={{paddingRight:"1rem"}}>${product.sale_price}</p>
            <p className="price" style={{fontWeight:"400",color:"rgb(37, 37, 37)"}}><strike>${product.price}</strike></p>
            </div>
            <button onClick={()=>setCart(addToCart(product,cart))}>Add to cart</button>
            <button onClick={()=>setCart(removeFromCart(product,cart))}>Remove from cart</button>
        </div>
    </div>
  ) 
}
export default ProductCard;