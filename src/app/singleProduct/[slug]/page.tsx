'use client'

import React, { useContext, useState } from "react";
import ProductCard from "@/components/ProducrCard/page";
import Modal from "../../../components/Modal";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import CommentsSection from "@/components/Comment/page";
import Image from "next/image";
import { productsData } from "@/context/data/context";

type singleProductProp = {
    params: {
        slug: string
    }
}

export default function SingleProduct({ params: { slug } }: singleProductProp) {

    const { products, cart, setCart } = useContext(productsData) || {};

    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(1);
    const [like, setLike] = useState(false);
    const [rating, setRating] = useState(0);

    const handleLike = () => {
        setLike(!like);
    }

    const handleRating = (value: number) => {
        setRating(value);
    };

    const product = products?.values().find((b) => b.slug === slug)

    if (!product) {
        return (
            <>
                <Navbar isHome={false} />
                <div className="flex items-center justify-center min-h-screen">
                    <h1 className="font-extrabold text-2xl text-red-500">Not Found </h1>
                </div>
            </>
        )
    }

    const handleAddToCart = () => {
        if (!setCart) return;
        setCart([...cart!, { ...product, quantity: count }]);
        setShowModal(true)
    };

    return (
        <>
            <Navbar isHome={false} />

            <div className="bg-white flex items-center sm:justify-center lg:justify-start sm:h-[90px] lg:h-[110px]">
                <div className="sm:ml-3 md:mx-12 lg:mx-[70px] big:mx-28 xl:mx-16 py-4 sm:w-full flex 
                items-center sm:justify-center lg:justify-start space-x-3 md:w-[55%] lg:w-[51%] 
                poppins font-[400] sm:text-[11px] lg:text-[16px]">
                    <h3 className="text-[#9f9f9f]">Home</h3>
                    <i className="fa-solid fa-angle-right"></i>
                    <h3 className="text-[#9f9f9f]">Shop</h3>
                    <i className="fa-solid fa-angle-right"></i>
                    <div className="sm:h-[30px] lg:h-[40px] w-[3px] bg-gray-400"></div>
                    <p className="text-black">{product.product_name}</p>
                </div>
            </div>

            <div className="py-4 flex sm:flex-col lg:flex-row sm:items-center sm:justify-center lg:items-start lg:justify-evenly w-full ">
                <div className="flex sm:items-center lg:items-start justify-center xl:w-[40%] p-0 sm:mb-4 lg:mb-0">
                    <div className="flex items-center justify-center bg-[#fff9e5] py-1 px-0 m-0
                       sm:h-[230px] md:h-[230px] lg:h-[340px] w-full xl:h-[500px] rounded-lg">
                        <Image className="sm:w-[95%] lg:w-[300px] xl:w-[400px] h-auto" src={product.image_url} alt="" width={1200} height={700} />
                    </div>
                </div>
                <div className="gap-4 flex flex-col sm:items-center sm:justify-center lg:items-start 
                lg:justify-evenly min-h-screen sm:w-[92%] lg:w-[50%]">
                    <div>
                        <h1 className=" poppins font-[400] sm:text-[30px] lg:text-[40px] big:text-[42px]">{product.product_name}</h1>
                        <h3 className=" poppins font-[500] sm:text-[20px]  lg:text-[23px] big:text-[24px] text-[#9f9f9f]"> Rs. {product.price}</h3>
                    </div>

                    <div className="w-full flex sm:flex-col md:flex-row items-center sm:justify-center md:justify-center lg:justify-start gap-2">
                        <div className="flex items-center sm:justify-center lg:justify-start  gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i
                                    key={star}
                                    className={`fa-solid fa-star ${star <= rating ? "text-[#ffda5b]" : "text-gray-100"
                                        } text-xl cursor-pointer`}
                                    onClick={() => handleRating(star)}
                                ></i>
                            ))}
                        </div>
                        <div className="sm:hidden md:block h-[35px] w-[1.5px] bg-gray-400"></div>
                        <p className="text-[#9f9f9f] poppins text-[13px] font-[400]">5 Customer Review</p>
                    </div>
                    <div className="text-[#000] poppins text-[13px] font-[400] w-[72%]">
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col sm:items-center lg:items-start justify-center">
                            <p className="pb-3 poppins font-[400] text-[14px] text-[#9f9f9f]">Size</p>
                            <div className="pb-3 gap-4 w-full flex items-start sm:justify-center lg:justify-start poppins font-[400] text-[13px]" >
                                <div>
                                    <button className="px-[15px] py-2 rounded-[6px] bg-[#Faf4f4] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                                        S
                                    </button>
                                </div>
                                <div>
                                    <button className="px-[11px] py-2 rounded-[6px] bg-[#Faf4f4] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                                        M
                                    </button>
                                </div>
                                <div>
                                    <button className="px-[15px] py-2 rounded-[6px] bg-[#Faf4f4] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                                        L
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col sm:items-center lg:items-start justify-center">
                            <p className="pb-3 poppins font-[400] text-[14px] text-[#9f9f9f]">Color</p>
                            <div className="flex items-center justify-start gap-4">
                                <i className="text-[38px] text-[#816dfa] fa-solid fa-circle"></i>
                                <i className="text-[38px] text-[#000000] fa-solid fa-circle"></i>
                                <i className="text-[38px] text-[#cdba7b] fa-solid fa-circle"></i>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 flex sm:flex-col md:flex-row items-center justify-start sm:w-[100%] md:w-[70%]  sm:gap-4 md:gap-0 p-0">
                        <div className="
                        flex items-center justify-around border-[1px] border-[#9f9f9f]
                        rounded-lg py-[19px] px-1 poppins font-[500] text-[16px] w-[35%]">
                            <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>-</button>
                            <button>{count}</button>
                            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                        </div>

                        <button className="flex items-center justify-around border-[1px]
                         border-[#000000] rounded-[12px] py-[15px] px-[20px] ml-4 w-[60%] poppins font-[400]
                          text-[20px]" onClick={handleAddToCart}>
                            Add To Cart
                        </button>
                    </div>
                    <hr className="sm:my-4 md:my-8 bg-[#d9d9d9] w-full h-[1.5px]" />

                    <div className="w-full flex items-end sm:justify-center lg:justify-start gap-6">
                        <div className="sm:w-[96%] md:w-[50%] lg:w-[65%] xl:w-[50%] flex flex-col items-start
                         justify-center poppins font-[400] text-[16px] text-[#9f9f9f]">
                            <div className="py-2 w-full  flex items-center justify-start">
                                <p className="w-[30%]">SKU</p>
                                <p className="w-[5%]">:</p>
                                <p className="w-[60%]">{product._id.slice(0, 5)}</p>
                            </div>
                            <div className="py-2 w-full  flex items-center justify-start">
                                <p className="w-[30%]">Category</p>
                                <p className="w-[5%]">:</p>
                                <p className="w-[60%]">{product.category}</p>
                            </div>
                            <div className="py-2 w-full  flex items-center justify-start">
                                <p className="w-[30%]">Tags</p>
                                <p className="w-[5%]">:</p>
                                <p className="w-[65%]">{product.tags.join(" , ")}</p>
                            </div>
                            <div className="py-2 w-full  flex items-center justify-start">
                                <p className="w-[30%]">Share</p>
                                <p className="w-[5%]">:</p>
                                <p className="w-[6%] text-black flex gap-6"><i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-brands fa-twitter"></i></p>
                            </div>
                        </div>
                        <div className="hover:cursor-pointer"><i className={like ? "text-2xl text-red-500 fa-solid fa-heart" : "text-2xl text-red-500 fa-regular fa-heart"} onClick={handleLike}></i></div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <hr className="my-8 bg-[#d9d9d9] w-5/6 h-[1.5px]" />
            </div>

            <CommentsSection />

            <hr className="sm:my-4 xl:my-8 bg-[#d9d9d9] w-full h-[1.5px]" />

            <div className="flex flex-col items-center justify-center min-h-screen sm:py-4 xl:py-16 bg-white w-full">
                <div className="poppins font-[500] sm:text-[35px] md:text-[36px] text-center">
                    <h1>Related Products</h1>
                </div>
                <div className="flex sm:flex-col md:flex-wrap md:flex-row items-center justify-center sm:pt-10 xl:pt-24 pb-3 gap-2">
                    {
                        products
                            ?.filter((item) => item.category === product.category && item._id !== product._id)
                            .sort(() => Math.random() - 0.9)
                            .slice(0, 4)
                            .map((filteredProduct) => (
                                <ProductCard key={filteredProduct._id} product={filteredProduct} />
                            ))
                    }
                </div>
                <div className="poppins font-[500] text-[24px] py-10 ">
                    <Link href="/shop">
                        <button className="border-b-[3px] border-black sm:pb-4 lg:pb-0">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(!showModal)} />
        </>
    )
}