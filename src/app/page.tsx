
import ProductCard from "@/components/ProducrCard/page";
import Link from "next/link";
import Navbar from "../components/Navbar";
import React from "react"
import { getFourProducts } from "../../scripts/fetchProducts";
import Image from "next/image";

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
            <div className="flex sm:flex-col lg:flex-row items-center justify-center min-h-screen p-0 m-0 bg-[#fbebb5]">
                <div className="flex-col justify-end items-center p-0 m-0 sm:w-[80%] lg:w-[37%]">
                    <div className="p-0 m-0 poppins sm:text-[26px] md:text-[38px] lg:text-[44px] xl:text-[64px] font-[500] text-[#eea251]">
                        <h1>
                            COCO Mademoiselle CHANEL
                        </h1>
                    </div>
                    <div className="poppins font-[500] sm:text-[14px] lg:text-[22px] sm:py-3 lg:pt-10">
                        <Link href='/shop'><button className="sm:border-b-[2px] lg:border-b-[3px] border-black pb-2">
                            Shop Now
                        </button></Link>
                    </div>
                </div>
                <div className="">
                    <Image className="sm:w-[175px] md:w-[200px] lg:w-[235px] xl:w-[350px] h-auto" src="/coco mad chanel.webp" alt="image" width={500} height={300} />
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row items-center justify-evenly sm:py-8 md:py-16 m-0 bg-[#faf4f4]">
                <div className="flex-col justify-end items-center p-0 m-0">
                    <div className="sm:w-[200px] lg:w-[300px] xl:w-[350px] h-[250px] xl:h-[380px] px-4 py-2">
                        <Image className="sm:w-[190px] xl:w-[300px] h-auto" src="/attar3.webp" alt="" width={500} height={300}/>
                    </div>
                    <div className="p-0 m-0 lg:my-2 poppins font-[500] sm:text-[26px] xl:text-[36px]">
                        <h1>
                            Oud & Rose Cartier
                        </h1>
                    </div>
                    <div className="poppins font-[500] sm:text-[20px] xl:text-[24px] sm:py-3 md:pt-5">
                        <Link href='/shop'>
                            <button className="sm:border-b-[2px] md:border-b-[3px] border-black pb-2">
                                View More
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex-col justify-end items-center p-0 m-0">
                    <div className="sm:w-[200px] lg:w-[300px] xl:w-[350px] h-[250px] xl:h-[380px] px-4 py-2">
                        <Image className="sm:w-[190px] xl:w-[300px] h-auto" src="/attar7.webp" alt="" width={500} height={300}/>
                    </div>
                    <div className="p-0 m-0 lg:my-2 poppins font-[500] sm:text-[26px] xl:text-[36px]">
                        <h1>
                            Sandalwood Attar
                        </h1>
                    </div>
                    <div className="poppins font-[500] sm:text-[20px] xl:text-[24px] sm:py-3 md:pt-5">
                        <Link href='/shop'>
                            <button className="sm:border-b-[2px] md:border-b-[3px] border-black pb-2">
                                View More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-white w-full">
                <div className="poppins font-[500] sm:text-[35px] md:text-[36px] text-center">
                    <h1>Top Picks For You</h1>
                </div>
                <div className="poppins font-[500] sm:text-[15px] lg:text-[16px] sm:px-1 md:px-0 pt-4 text-center text-[#9f9f9f]">
                    <p>
                        Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
                    </p>
                </div>
                <div className="flex sm:flex-col md:flex-wrap md:flex-row items-center justify-center sm:pt-10 xl:pt-24 pb-3 gap-2">
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

            <div className="flex sm:flex-col lg:flex-row items-center justify-center p-0 m-0 bg-[#fff9ef]">
                <div className="">
                    <Image className="sm:w-[190px] lg:w-[340px] h-auto" src="/laurissi.webp" alt="" width={500} height={300}/>
                </div>
                <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[90%] lg:w-[35%]">
                    <div className="p-0 m-0 poppins font-[500] text-[24px]">
                        <h1>
                            New Arrivals
                        </h1>
                    </div>
                    <div className="poppins sm:text-[36px] font-[700] lg:text-[48px]">
                        <h2 className="">
                            L&apos;EAU LAURISSI
                        </h2>
                    </div>
                    <div className="poppins font-[400] text-[20px] sm:pb-10 sm:pt-4 lg:pt-6 ">
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
                <div className="poppins font-[500] text-[16px] pt-4 text-center text-[#9f9f9f] sm:w-[90%] md:w-[100%]">
                    <p>
                        Find a bright ideal to suit your taste with our great selection
                    </p>
                </div>

                <div className="flex sm:flex-col lg:flex-row lg:flex-wrap items-center justify-center sm:pt-2 lg:pt-12 pb-3">

                    <div className="flex items-center justify-evenly p-0 m-0 bg-white sm:w-[300px] sm:h-[500px] lg:w-[395px] lg:h-[555px]" >
                        <div className="flex flex-col justify-center items-center p-0 m-0">
                            <div className="sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] p-0 mb-6">
                                <Image className="rounded-lg w-full h-full object-cover" src="/spray.webp" alt="image" width={400} height={400}/>
                            </div>
                            <div className="p-0 m-0 poppins font-[400] text-[20px] pb-2 sm:w-[80%] md:w-[100%]">
                                <h2>
                                    Liquid or gas which is better
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
                    <div className="flex items-center justify-evenly p-0 m-0 bg-white sm:w-[300px] sm:h-[500px] lg:w-[395px] lg:h-[555px]" >
                        <div className="flex flex-col justify-center items-center p-0 m-0">
                            <div className="sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] p-0 mb-6">
                                <Image className="rounded-lg w-full h-full object-cover" src="/apply.webp" alt="image" width={400} height={400}/>
                            </div>
                            <div className="p-0 m-0 poppins font-[400] text-[20px] pb-2 sm:w-[80%] md:w-[100%]">
                                <h2>
                                    The best way to apply perfumes
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
                    <div className="flex items-center justify-evenly p-0 m-0 bg-white sm:w-[300px] sm:h-[500px] lg:w-[395px] lg:h-[555px]" >
                        <div className="flex flex-col justify-center items-center p-0 m-0">
                            <div className="sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] p-0 mb-6">
                                <Image className="rounded-lg w-full h-full object-cover" src="/perfumes.webp" alt="image" width={400} height={400}/>
                            </div>
                            <div className="p-0 m-0 poppins font-[400] text-[20px] pb-2 sm:w-[80%] md:w-[100%]">
                                <h2>
                                    Quality of a great perfume
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
                    <Image className="w-full h-full object-cover opacity-65" src="/background1.webp" alt="Background" width={1900} height={800} />
                </div>

                <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[90%] md:w-[35%]">
                    <div className="poppins font-[700] sm:text-[55px] md:text-[60px] text-center">
                        <h2>Our Instagram</h2>
                    </div>
                    <div className="p-0 m-0 poppins font-[400] text-[20px] text-center">
                        <h1>Follow our store on Instagram</h1>
                    </div>
                    <div className="poppins font-[400] text-[20px] pt-6">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <button
                                className="border py-3 px-16 rounded-[100px] shadow-xl bg-[#faf4f4]"
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
