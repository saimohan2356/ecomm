import { v4 as uuid } from "uuid";
import Carousel from "./carousel";
import "./banner.scss";
import {useEffect, useState } from "react";
const Banner=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        className:"center",
        centerMode:true,
        centerPadding:"0px"
      };
      const {flash,setFlash}=useState();
    const data=["https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-1.jpg&w=3840&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=3840&q=100",
    "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=3840&q=100"];
    const saleImg="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-2.jpg&w=3840&q=100";

const flashSaleUrl="";
const fetchFlashSales=async()=>{
    try {
        const res=await fetch(flashSaleUrl);
        const data=await res.json();
        setFlash(data);
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    fetchFlashSales()
},[])
    return(
        <div className="banner-container">
            <Carousel settings={settings}>
                {data.map(e=>{
                    return (
                        <div key={uuid()} className="banner-slide-container">
                            <img src={e} className="banner-img-slide" alt=".."/>
                        </div>
                    )
                })}
            </Carousel>
            <div className="flex-box">
                <img className="saleImg" src={saleImg} alt=".."/>
                <div>
                    <h1>Flash Sale</h1>
                </div>
            </div>
        </div>
    )
}
export default Banner;