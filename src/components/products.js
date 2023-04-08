import { useState,useEffect } from "react";
import {v4 as uuid} from "uuid";
import ProductCard from "./productCard";
const Products=({title,url})=>{
    const [products,setProducts]=useState([]);
    const fetchProducts = async()=>{
        try{
            const res=await fetch(url);
            const data=await res.json();
            const tempData = data.map(e=>{
                console.log(e);
                return{
                    ...e,
                    id:uuid().split("-").join(""),
                    gallery: e.gallery.map(g=>{
                        return{
                            ...g,
                            thumbnail : g.thumbnail.split("/").join("%2F"),
                            original : g.original.split("/").join("%2F")
                        }
                    }),
                    image : {
                        
                            ...e.image,
                            thumbnail : e.image.thumbnail.split("/").join("%2F"),
                            original : e.image.original.split("/").join("%2F")
                    }
                }
            })
            setProducts(tempData);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return (
        <div className="pro" style={{margin:"1rem"}}>
            <h2 style={{marginLeft:"1rem"}}>{title}</h2>
            <div style={{display:"grid" , gridTemplateColumns:"repeat(4,1fr)"}}>
                {products.map(e=>{
                    return <ProductCard product={e} key={uuid()}/>
                })}
            </div>
        </div>
    )
}
export default Products;