"use client"

import { useEffect, useState } from "react";
import { getAllProducts } from "../../../scripts/fetchProducts";
import Navbar from "../../components/Navbar";
import ProductCard from "@/components/ProducrCard/page";

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
    const [itemsPerPage, setitemsPerPage] = useState(16);
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
        return <div>Loading...</div>;
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
            <div className="relative flex items-center justify-center w-full h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <img className="w-full h-full object-cover" src="./Rectangle 1.png" alt="Background" />
                </div>

                <div className="flex flex-col justify-center items-center p-0 m-0 w-[35%]">
                    <img className="" src="./Meubel House_Logos-05.png" alt="Background" />
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>Shop</h2>
                    </div>
                    <div className="w-[30%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Shop</h3>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100px] flex items-center justify-center" style={{ backgroundColor: "#faf4f4" }}>
                <div className="w-[90%] flex items-center justify-between" >
                    <div className="w-[45%] flex items-center justify-evenly">
                        <p className="poppins font-[400] text-[20px]">Search</p>
                        <div className="w-36 text-[12px] font-bold">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-36 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <div className="h-[40px] w-[3px] bg-gray-400"></div>
                        <p className="poppins font-[400] text-[16px]">  {`Showing ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, filteredProducts.length)
                            } of ${filteredProducts.length} results`}</p>
                    </div>
                    <div className="w-[45%] flex items-center justify-evenly poppins font-[400] text-[20px]">
                        <p>Show</p>
                        <input className="p-4 w-[55px] h-[55px]" type="text" value={itemsPerPage || ""} placeholder="16" onChange={(e) => {
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
                        <p>Sort by</p>
                        <input className="pl-8 w-[185px] h-[55px]" type="text" name="" id="" placeholder="Default" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full">
                <div className="py-11 grid grid-cols-4 gap-5 w-[88%]">
                    {
                        currentProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>

            <div className="w-full flex items-center justify-center py-12" >
                <div className="w-2/5 flex items-center justify-evenly poppins font-[400] text-[20px]" >
                    <div className="flex items-center space-x-4">
                        <button
                            className={`px-[31.7px] py-[20px] rounded-[12px] ${currentPage === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]"
                                }`}
                            onClick={() => handlePageChange(1)}

                        >
                            1
                        </button>
                        <button
                            className={`px-[31.7px] py-[20px] rounded-[12px] ${currentPage === 2
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]"
                                }`}
                            onClick={() => handlePageChange(2)}

                        >
                            2
                        </button>
                        <button
                            className={`px-[31.7px] py-[20px] rounded-[12px] ${currentPage === 3
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]"
                                }`}
                            onClick={() => handlePageChange(3)}

                        >
                            3
                        </button>
                        <button
                            className={`px-[31.7px] py-[20px] rounded-[12px] ${currentPage === totalPages
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

            <div className="flex items-center justify-evenly py-28 px-20 m-0" style={{ backgroundColor: "#faf4f4" }}>
                <div className="flex flex-col justify-center items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>
                            Free Delivery
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            For all oders over $50, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>
                            90 Days Return
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            If goods have problems, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>
                            Secure Payment
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            100% secure payment, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}