'use client'

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProducrCard/page";
import Modal from "../../../components/Modal";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { getAllProducts } from "../../../../scripts/fetchProducts";
import CommentsSection from "@/components/Comment/page";

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

type singleProductProp = {
    params: {
        slug: string
    }
}

export default function SingleProduct({ params: { slug } }: singleProductProp) {

    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [like, setLike] = useState(false);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getAllProducts();
            setProducts(fetchedProducts);
        }
        fetchProducts();
    }, []);

    const AddCount = () => {
        setCount(count + 1);
    }
    const SubCount = () => {
        setCount(count - 1);
    }

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


    return (
        <>
            <Navbar isHome={false} />

            <div className="bg-white flex items-center justify-start w-full h-[110px]">
                <div className="mx-24 py-4 w-[35%] flex items-center justify-between poppins font-[400] text-[16px]">
                    <h3 className="text-[#9f9f9f]">Home</h3>
                    <i className="fa-solid fa-angle-right"></i>
                    <h3 className="text-[#9f9f9f]">Shop</h3>
                    <i className="fa-solid fa-angle-right"></i>
                    <div className="h-[40px] w-[3px] bg-gray-400"></div>
                    <p className="text-black">{product.product_name}</p>
                </div>
            </div>

            <div className="py-4 flex items-start justify-center w-full ">
                <div className="flex items-start justify-center w-[43%] gap-4">
                    <div className="flex flex-col items-center justify-center w-[20%] gap-4">
                        <div className="flex items-center justify-center bg-[#fff9e5] py-4 px-1 m-0 rounded-lg w-[76px] h-[80px]">
                            <img className="w-full h-auto" src={product.image_url} alt="" /></div>
                        <div className="flex items-center justify-center bg-[#fff9e5] py-4 px-1 m-0 rounded-lg w-[76px] h-[80px]">
                            <img className="w-full h-auto" src={product.image_url} alt="" /></div>
                        <div className="flex items-center justify-center bg-[#fff9e5] py-2 px-1 m-0 rounded-lg w-[76px] h-[80px]"><img className="w-full h-auto" src={product.image_url} alt="" /></div>
                        <div className="flex items-center justify-center bg-[#fff9e5] py-4 px-1 m-0 rounded-lg w-[76px] h-[80px]"><img className="w-full h-auto" src={product.image_url} alt="" /></div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center bg-[#fff9e5] py-1 px-0 m-0 w-[80%] h-[500px] rounded-lg">
                            <img className="w-full h-auto" src={product.image_url} alt="" />
                        </div>
                    </div>
                </div>
                <div className="gap-4 flex flex-col items-start justify-evenly min-h-screen w-[43%]">
                    <div>
                        <h1 className=" poppins font-[400] text-[42px]">{product.product_name}</h1>
                        <h3 className=" poppins font-[500] text-[24px] text-[#9f9f9f]"> Rs. {product.price}</h3>
                    </div>

                    <div className="w-full flex items-center justify-start gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <i
                                key={star}
                                className={`fa-solid fa-star ${star <= rating ? "text-[#ffda5b]" : "text-gray-100"
                                    } text-xl cursor-pointer`}
                                onClick={() => handleRating(star)}
                            ></i>
                        ))}
                        <div className="h-[35px] w-[1.5px] bg-gray-400"></div>
                        <p className="text-[#9f9f9f] poppins text-[13px] font-[400]">5 Customer Review</p>
                    </div>
                    <div className="text-[#000] poppins text-[13px] font-[400] w-[72%]">
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start">
                        <div className="w-full flex flex-col items-start justify-start">
                            <p className="pb-3 poppins font-[400] text-[14px] text-[#9f9f9f]">Size</p>
                            <div className="pb-3 gap-4 w-full flex items-start justify-start poppins font-[400] text-[13px]" >
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
                        <div className="w-full flex flex-col items-start justify-start">
                            <p className="pb-3 poppins font-[400] text-[14px] text-[#9f9f9f]">Color</p>
                            <div className="flex items-center justify-start gap-4">
                                <i className="text-[38px] text-[#816dfa] fa-solid fa-circle"></i>
                                <i className="text-[38px] text-[#000000] fa-solid fa-circle"></i>
                                <i className="text-[38px] text-[#cdba7b] fa-solid fa-circle"></i>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 flex items-center justify-start w-[70%] p-0">
                        <div className="
                        flex items-center justify-around border-[1px] border-[#9f9f9f]
                        rounded-lg py-[19px] px-1 poppins font-[500] text-[16px] w-[35%]">
                            <button onClick={SubCount}>-</button>
                            <button>{count}</button>
                            <button onClick={AddCount}>+</button>
                        </div>

                        <button className="flex items-center justify-around border-[1px]
                         border-[#000000] rounded-[12px] py-[15px] px-[20px] ml-4 w-[60%] poppins font-[400]
                          text-[20px]" onClick={() => setShowModal(true)}>
                            Add To Cart
                        </button>
                    </div>
                    <hr className="my-8 bg-[#d9d9d9] w-full h-[1.5px]" />
                    <div className="w-full flex items-end justify-start gap-6">
                        <div className="w-[50%] flex flex-col items-start justify-center poppins font-[400]
                          text-[16px] text-[#9f9f9f]">
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

            <hr className="my-8 bg-[#d9d9d9] w-full h-[1.5px]" />

            <div className=" font-[400] text-[24px] poppins flex flex-col items-center justify-evenly py-0 m-0 bg-white" >
                <div className="flex justify-center items-center py-6 m-0 gap-20">
                    <div className="p-0 m-0 poppins text-black">
                        <h1>
                            Description
                        </h1>
                    </div>
                    <div className="p-0 m-0 text-[#9f9f9f]">
                        <h1>
                            Additional Information
                        </h1>
                    </div>
                    <div className="p-0 m-0 text-[#9f9f9f]">
                        <h1>
                            Reviews [5]
                        </h1>
                    </div>
                </div>
                <div className="text-justify flex flex-col gap-8 w-3/4 py-6 m-0 poppins text-[#9f9f9f] font-[400] text-[16px] ">
                    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
                        stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords,
                        and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
                        engineering. Setting the bar as one of the loudest speakers in its class, the
                        Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
                        a clear midrange and extended highs for a sound that is both articulate and
                        pronounced. The analogue knobs allow you to fine tune the controls to your
                        personal preferences while the guitar-influenced leather strap enables easy
                        and stylish travel.</p>
                </div>

                <div className="flex justify-end items-center py-3 m-0 gap-8">
                    <div className="bg-[#fff9ef] py-20 px-4">
                        <img className="w-[560px] h-[170px]" src="/Cloud sofa1.png" alt="" />
                    </div>
                    <div className="bg-[#fff9ef] py-20 px-4">
                        <img className="w-[560px] h-[170px]" src="/Cloud sofa 11.png" alt="" />
                    </div>
                </div>
            </div>

            <hr className="my-14 bg-[#d9d9d9] w-full h-[1.5px]" />

            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white w-full">
                <div className="poppins font-[500] text-[36px] text-center">
                    <h1>Related Products</h1>
                </div>
                <div className="flex items-center justify-center pt-24 pb-3">
                    {
                        products.slice(0,4).map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    }
                </div>
                <div className="poppins font-[500] text-[24px] py-10 ">
                    <Link href="/shop">
                        <button className="border-b-[3px] border-black pb-4">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(!showModal)} />
        </>
    )
}