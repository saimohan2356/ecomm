import { useState } from 'react';
import Carousel from './components/carousel';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Products from './components/products';
import './App.css';
import CartContext from './context/cartContext';

function App() {
  const [cart,setCart]=useState({
    items:[],
    totalQty:0,
    totalPrice:0
});
console.log(cart);
  const bestSellers="https://chawkbazar.vercel.app/api/products_best_seller.json";
  const newArrivals="https://chawkbazar.vercel.app/api/products_new_arrival.json";
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Carousel/>
      <CartContext.Provider value={{cart,setCart}}>
      <Products setCart={setCart} cart={cart} title={"Best Sellers"} url={bestSellers}/>
      <div className='sixty'>
        <img src='https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-1.jpg&w=3840&q=100' alt='..'/>
      </div>
      <Products setCart={setCart} cart={cart} title={"New Arrival"} url={newArrivals}/>
      </CartContext.Provider>
    </div>
  );
}

export default App;


