"use client"

import { useEffect, useState } from "react";
import { getAllProducts } from "../../../scripts/fetchProducts";
import Navbar from "../../components/Navbar";
import ProductCard from "@/components/ProducrCard/page";
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

export default function Shop() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(12);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getAllProducts();
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    useEffect(() => {

        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [searchTerm, products]);

    if (loading) {
        return (
            <>
                <Navbar isHome={false} />
                <div className="flex items-center justify-center text-[34px] font-[600] min-h-screen">Loading...</div>
            </>
        )

    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    return (
        <>
            <Navbar isHome={false} />
            <div className="relative flex items-center justify-center w-full sm:h-[280px] md:h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <Image className="opacity-65 w-full h-full object-cover" src="/background2.webp" alt="Background" width={1900} height={400} />
                </div>

                <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[100%] lg:w-[35%]">
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>Shop</h2>
                    </div>
                    <div className="sm:w-[40%] md:w-[30%] lg:w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Shop</h3>
                    </div>
                </div>
            </div>

            <div className="w-full sm:h-[247px] lg:h-[100px] flex items-center justify-center bg-[#faf4f4]">
                <div className="sm:w-[100%] md:w-[50%] lg:w-[100%] xl:w-[90%] sm:h-3/4 md:h-full flex sm:flex-col lg:flex-row items-center sm:justify-evenly lg:justify-center xl:justify-between" >
                    <div className="sm:w-[100%] lg:w-[50%] xl:w-[45%] sm:h-1/2 flex sm:flex-col lg:flex-row items-center justify-evenly">
                        <div className="sm:w-[85%] lg:w-1/2 flex items-center justify-evenly">
                            <p className="poppins font-[400] sm:text-[16px] xl:text-[20px]">Search</p>
                            <div className="sm:w-36 lg:w-28 xl:w-36 lg:text-[10px] xl:text-[12px] font-bold">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full sm:px-2 lg:px-2 xl:px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="sm:hidden lg:block h-[40px] lg:w-[2px] xl:w-[3px] bg-gray-400"></div>
                        <p className="poppins font-[400] sm:text-[13px] xl:text-[16px]">  {`Showing ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, filteredProducts.length)
                            } of ${filteredProducts.length} results`}
                        </p>
                    </div>
                    <div className="sm:w-[100%] lg:w-[45%] sm:h-1/2 flex sm:flex-col lg:flex-row items-center justify-evenly poppins font-[400] sm:text-[16px] xl:text-[20px]">
                        <div className="w-1/2 flex items-center justify-evenly">
                            <p>Show</p>
                            <input className="sm:p-2 xl:p-4 sm:w-[38px] sm:h-[38px] xl:w-[55px] xl:h-[55px]" type="text" value={itemsPerPage || ""} placeholder="12" onChange={(e) => {
                                const value = e.target.value
                                if (value === "") {
                                    setitemsPerPage(0);
                                    setCurrentPage(1);
                                }
                                const parsedValue = parseInt(value, 10);
                                if (!isNaN(parsedValue) && parsedValue > 0) {
                                    setitemsPerPage(parsedValue);
                                    setCurrentPage(1);
                                }

                            }} />
                        </div>
                        <div className="sm:w-3/4 lg:w-2/3 flex items-center justify-evenly">
                            <p>Sort by</p>
                            <input className="sm:pl-3 xl:pl-8 sm:w-[150px] sm:h-[38px] xl:w-[185px] xl:h-[55px]" type="text" name="" id="" placeholder="Default" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full">
                <div className="py-11 grid justify-items-center sm:grid-cols-1 md:grid-cols-2 big:grid-cols-3 xl:grid-cols-4 gap-5 w-[88%]">
                    {
                        currentProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>

            <div className="flex items-center justify-center sm:py-8 lg:py-12" >
                <div className="flex items-center justify-evenly poppins font-[400] sm:text-[19px] lg:text-[20px]" >
                    <div className="flex justify-center items-center sm:space-x-3 lg:space-x-4">
                        <button
                            className={`sm:px-[18.5px] sm:py-[8px] lg:px-[31.7px] lg:py-[20px] rounded-[12px] ${currentPage === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]"
                                }`}
                            onClick={() => handlePageChange(1)}

                        >
                            1
                        </button>
                        <button
                            className={`sm:px-[17px] sm:py-[8px] lg:px-[31.7px] lg:py-[20px] rounded-[12px] ${currentPage === 2
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]"
                                }`}
                            onClick={() => handlePageChange(2)}

                        >
                            2
                        </button>
                        <button
                            className={`sm:px-[17px] sm:py-[8px] lg:px-[31.7px] lg:py-[20px] rounded-[12px] ${currentPage === 3
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]"
                                }`}
                            onClick={() => handlePageChange(3)}

                        >
                            3
                        </button>
                        <button
                            className={`sm:px-[17px] sm:py-[8px] lg:px-[31.7px] lg:py-[20px] rounded-[12px] ${currentPage === totalPages
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]"
                                }`}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex sm:flex-col lg:flex-row lg:items-start big:items-center
            justify-evenly sm:space-y-4 md:space-y-8 lg:space-y-0 lg:space-x-2 sm:py-10
            lg:py-28 sm:px-4 lg:px-20 m-0 bg-[#faf4f4]">
                <div className="lg:w-1/3 sm:w-full flex flex-col justify-center md:items-center lg:items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] sm:text-[28px] lg:text-[32px]">
                        <h1>
                            Free Delivery
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] sm:text-[18px] lg:text-[20px] text-[#9f9f9f]">
                            For all oders over $50, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-full flex flex-col justify-center md:items-center lg:items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] sm:text-[28px] lg:text-[32px]">
                        <h1>
                            90 Days Return
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] sm:text-[18px] lg:text-[20px] text-[#9f9f9f]">
                            If goods have problems, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-full flex flex-col justify-center md:items-center lg:items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] sm:text-[28px] lg:text-[32px]">
                        <h1>
                            Secure Payment
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] sm:text-[18px] lg:text-[20px] text-[#9f9f9f]">
                            100% secure payment, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}