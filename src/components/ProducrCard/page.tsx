"use client"


import Link from "next/link";
import React from "react";

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

interface CardProp {
    product: Product
}

export default function ProductCard({ product }: CardProp) {

    return (
        <>
            <div
                key={product._id}
                className="flex items-center justify-evenly p-0 m-0 bg-white w-[285px] h-[375px] " >
                <div className="flex flex-col justify-end items-start p-0 m-0">
                    <div className="flex items-center justify-center w-[280px] h-[280px] px-10 pb-12">
                        <Link href={`/singleProduct/${product.slug}`}><img className="object-cover w-[270px] h-auto" src={product.image_url} alt="" /></Link>
                    </div>
                    <div className="p-0 m-0 poppins font-[400] text-[16px]">
                        <h2>
                            {product.product_name}
                        </h2>
                    </div>
                    <div className="poppins font-[500] text-[24px] pt-2 p-0 m-0">
                        <p className="">
                            Rs. {product.price}
                        </p>
                    </div>
                </div>
            </div>
            {/* {
                product.products.map((product) => (
                    <div
                        key={product.sku}
                        className="flex items-center justify-evenly p-0 m-0 bg-white w-[285px] h-[375px] " >
                        <div className="flex flex-col justify-end items-start p-0 m-0">
                            <div className="flex items-center justify-center w-[280px] h-[280px] px-10 pb-12">
                                <Link href={`/singleProduct/${product.sku}`}><img className="object-cover w-[270px] h-auto" src={product.image} alt="" /></Link>
                            </div>
                            <div className="p-0 m-0 poppins font-[400] text-[16px]">
                                <h2>
                                    {product.name}
                                </h2>
                            </div>
                            <div className="poppins font-[500] text-[24px] pt-2 p-0 m-0">
                                <p className="">
                                    Rs. {product.price}
                                </p>
                            </div>
                        </div>
                    </div>

                ))
            } */}
        </>
    )
}