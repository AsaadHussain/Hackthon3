
import ProductCard from "@/components/ProducrCard/page";
import Link from "next/link";
import Navbar from "../components/Navbar";
import React from "react"
import { getFourProducts } from "../../scripts/fetchProducts";

interface Product {
    _id: string;
    product_name: string;
    price: number;
    description: string;
    size: number;
    category: string;
    tags: string[];
    stock_quantity: number;
    image_url: string;
    rating: number;
    slug: string;
}

export default async function Home() {

    const products: Product[] = await getFourProducts()

    return (
        <>
            <Navbar isHome={true} />
            <div className="flex items-center justify-center p-0 m-0" style={{ backgroundColor: "#fbebb5" }}>
                <div className="flex-col justify-end items-center p-0 m-0 w-[35%]">
                    <div className="p-0 m-0 poppins font-[500] text-[64px]">
                        <h1>
                            Rocket single seater
                        </h1>
                    </div>
                    <div className="poppins font-[500] text-[24px] pt-10">
                        <Link href='/shop'><button className="border-b-[3px] border-black pb-2">
                            Shop Now
                        </button></Link>
                    </div>
                </div>
                <div className="">
                    <img className="w-[600px] h-[850px]" src="./Rocket single seater 1.png" alt="" />
                </div>
            </div>

            <div className="flex items-center justify-evenly py-16 m-0" style={{ backgroundColor: "#faf4f4" }}>
                <div className="flex-col justify-end items-center p-0 m-0">
                    <div className="px-4 py-2">
                        <img className="w-[390px] h-[300px]" src="./Granite square side table 1.png" alt="" />
                    </div>
                    <div className="p-0 m-0 poppins font-[500] text-[36px]">
                        <h1>
                            Side table
                        </h1>
                    </div>
                    <div className="poppins font-[500] text-[24px] pt-6">
                        <Link href='/singleProduct'>
                            <button className="border-b-[3px] border-black pb-2">
                                View More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex-col justify-end items-center p-0 m-0">
                    <div className="px-4 py-2">
                        <img className="w-[400px] h-[290px]" src="./Cloud Sofa.png" alt="" />
                    </div>
                    <div className="p-0 m-0 poppins font-[500] text-[36px]">
                        <h1>
                            Side table
                        </h1>
                    </div>
                    <div className="poppins font-[500] text-[24px] pt-6">
                        <Link href='/singleProduct'>
                            <button className="border-b-[3px] border-black pb-2">
                                View More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-white w-full">
                <div className="poppins font-[500] text-[36px] text-center">
                    <h1>Top Picks For You</h1>
                </div>
                <div className="poppins font-[500] text-[16px] pt-4 text-center" style={{ color: '#9f9f9f' }}>
                    <p>
                        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
                    </p>
                </div>
                <div className="flex items-center justify-center pt-24 pb-3 gap-2">
                    {
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    }
                </div>

                <div className="poppins font-[500] text-[24px] pt-6 ">
                    <Link href='/shop'>
                        <button className="border-b-[3px] border-black pb-3">
                            View More
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center p-0 m-0" style={{ backgroundColor: "#fff9ef" }}>
                <div className="">
                    <img className="w-[900px] h-[700px]" src="./Asgaard sofa 1.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center p-0 m-0 w-[35%]">
                    <div className="p-0 m-0 poppins font-[500] text-[24px]">
                        <h1>
                            New Arrivals
                        </h1>
                    </div>
                    <div className="poppins font-[700] text-[48px]">
                        <h2 className="">
                            Asgaard Sofa
                        </h2>
                    </div>
                    <div className="poppins font-[400] text-[20px] pt-6 ">
                        <Link href="/cart">
                            <button className="border border-black py-3 px-16">
                                Order Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-white w-full">
                <div className="poppins font-[500] text-[36px] text-center">
                    <h1>Our Blogs</h1>
                </div>
                <div className="poppins font-[500] text-[16px] pt-4 text-center" style={{ color: '#9f9f9f' }}>
                    <p>
                        Find a bright ideal to suit your taste with our great selection
                    </p>
                </div>
                <div className="flex items-center justify-center pt-12 pb-3">

                    <div className="flex items-center justify-evenly px-4 m-0 bg-white w-[395px] h-[555px]" >
                        <div className="flex flex-col justify-center items-center p-0 m-0">
                            <div className="px-0 pb-6">
                                <img className="w-full h-full" src="./Rectangle 13.png" alt="" />
                            </div>
                            <div className="p-0 m-0 poppins font-[400] text-[20px] pb-2">
                                <h2>
                                    Going all-in with millennial design
                                </h2>
                            </div>
                            <div className="poppins font-[500] text-[24px] pt-1 pb-3">
                                <Link href='/blog'>
                                    <button className="border-b-[3px] border-black pb-2">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                            <div className="flex items-center justify-evenly poppins font-[300] text-[16px] pt-1 p-0 m-0 w-3/4">
                                <p className="">
                                    <i className="fa-regular fa-clock"></i>&ensp;5 min
                                </p>
                                <p className="">
                                    <i className="fa-regular fa-calendar-days"></i>&ensp;12<sup>th</sup> Oct 2024
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-evenly px-4 m-0 bg-white w-[395px] h-[555px] " >
                        <div className="flex flex-col justify-center items-center p-0 m-0">
                            <div className="px-0 pb-6">
                                <img className="w-full h-full" src="./Rectangle 14.png" alt="" />
                            </div>
                            <div className="p-0 m-0 poppins font-[400] text-[20px] pb-2">
                                <h2>
                                    Going all-in with millennial design
                                </h2>
                            </div>
                            <div className="poppins font-[500] text-[24px] pt-1 pb-3">
                                <Link href='/blog'>
                                    <button className="border-b-[3px] border-black pb-2">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                            <div className="flex items-center justify-evenly poppins font-[300] text-[16px] pt-1 p-0 m-0 w-3/4">
                                <p className="">
                                    <i className="fa-regular fa-clock"></i>&ensp;5 min
                                </p>
                                <p className="">
                                    <i className="fa-regular fa-calendar-days"></i>&ensp;12<sup>th</sup> Oct 2024
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-evenly px-4 m-0 bg-white w-[395px] h-[555px] " >
                        <div className="flex flex-col justify-center items-center p-0 m-0">
                            <div className="px-0 pb-6">
                                <img className="w-full h-full" src="./Rectangle 15.png" alt="" />
                            </div>
                            <div className="p-0 m-0 poppins font-[400] text-[20px] pb-2">
                                <h2>
                                    Going all-in with millennial design
                                </h2>
                            </div>
                            <div className="poppins font-[500] text-[24px] pt-1 pb-3">
                                <Link href='/blog'>
                                    <button className="border-b-[3px] border-black pb-2">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                            <div className="flex items-center justify-evenly poppins font-[300] text-[16px] pt-1 p-0 m-0 w-3/4">
                                <p className="">
                                    <i className="fa-regular fa-clock"></i>&ensp;5 min
                                </p>
                                <p className="">
                                    <i className="fa-regular fa-calendar-days"></i>&ensp;12<sup>th</sup> Oct 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poppins font-[500] text-[24px] pt-10 pb-3">
                    <Link href='/blog'>
                        <button className="border-b-[3px] border-black pb-4">
                            View All Post
                        </button>
                    </Link>
                </div>
            </div>

            <div className="relative flex items-center justify-center w-full h-[450px]">
                <div className="absolute inset-0 -z-10">
                    <img className="w-full h-full object-cover" src="./Rectangle 17.png" alt="Background" />
                </div>

                <div className="flex flex-col justify-center items-center p-0 m-0 w-[35%]">
                    <div className="poppins font-[700] text-[60px] text-center">
                        <h2>Our Instagram</h2>
                    </div>
                    <div className="p-0 m-0 poppins font-[400] text-[20px] text-center">
                        <h1>Follow our store on Instagram</h1>
                    </div>
                    <div className="poppins font-[400] text-[20px] pt-6">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <button
                                className="border py-3 px-16 rounded-[100px] shadow-xl"
                                style={{ backgroundColor: '#faf4f4' }}
                            >
                                Follow Us
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
