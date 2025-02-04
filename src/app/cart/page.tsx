"use client"

import Link from "next/link"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import { productsData } from "@/context/data/context"
import { useContext } from "react"

export default function Cart() {

    const { cart, setCart } = useContext(productsData) || {};

    const totalPrice = cart?.reduce((acc, product) => acc + product.price * (product.quantity ?? 1), 0) || 0;

    const handleRemoveFromCart = (index: number) => {
        if (!setCart) return;

        setCart((prevCart) => {
            return prevCart.filter((_, idx) => idx !== index);
        });
    };


    return (
        <>
            <Navbar isHome={false} />
            <div className="relative flex items-center justify-center w-full h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <Image className="opacity-65 w-full h-full object-cover" src="/background2.webp" alt="Background" width={1900} height={400} />
                </div>
                <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[100%] lg:w-[35%]">
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>Cart</h2>
                    </div>
                    <div className="sm:w-[46%] md:w-[30%] lg:w-[60%] xl:w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Cart</h3>
                    </div>
                </div>
            </div>

            <div className="w-full flex sm:flex-col big:flex-row items-start justify-evenly
            sm:px-1 sm:py-2 md:px-10 md:py-10 lg:px-10 lg:py-16 big:gap-2 xl:gap-0">
                <div className="sm:w-[95%] md:w-full xl:w-auto poppins overflow-x-auto">
                    {cart && cart.length > 0 ? (
                        <table className="scrollbar table-auto border-collapse border-transparent text-left">
                            <thead>
                                <tr className=" bg-[#fff9ef]">
                                    <th className="sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent"></th>
                                    <th className="sm:text-[12px] md:text-[16px] font-[500] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">Product</th>
                                    <th className="sm:text-[12px] md:text-[16px] font-[500] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">Price</th>
                                    <th className="sm:text-[12px] md:text-[16px] font-[500] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">Quantity</th>
                                    <th className="sm:text-[12px] md:text-[16px] font-[500] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">Subtotal</th>
                                    <th className="sm:text-[12px] md:text-[16px] font-[500] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product,index) => (
                                    <tr key={product._id} className="bg-white hover:bg-gray-100">
                                        <td className="pl-0 sm:pr-3 md:pr-6 sm:py-2 md:py-10 border border-transparent">
                                            <div className="flex items-center justify-center bg-[#fbebb5] p-0 m-0 rounded-lg sm:w-[50px] sm:h-[50px] md:w-[105px] md:h-[105px]">
                                                <Image className="w-[85%] h-auto" src={product.image_url} alt="" width={400} height={300} />
                                            </div>
                                        </td>
                                        <td className="text-[#9f9f9f] sm:text-[12px] md:text-[16px] font-[400] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">{product.product_name}</td>
                                        <td className="text-[#9f9f9f] sm:text-[12px] md:text-[16px] font-[400] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">Rs. {product.price}</td>
                                        <td className="sm:text-[12px] md:text-[16px] font-[400] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">
                                            <div className="flex items-center justify-center rounded-[5px] w-[32px] h-[32px] border-[2px] border-[#9f9f9f]">
                                                {product.quantity}
                                            </div>
                                        </td>
                                        <td className="sm:text-[12px] md:text-[16px] font-[400] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">
                                            Rs. {product.price * (product.quantity ?? 1)}
                                        </td>
                                        <td className="text-[#fbebb5] text-[18px] font-[400] sm:px-1 sm:py-2 lg:px-6 lg:py-4 border border-transparent">
                                            <i onClick={() => handleRemoveFromCart(index)} className="hover:cursor-pointer fa-solid fa-trash"></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="overflow-hidden flex items-center justify-center poppins font-[500] sm:text-sm md:text-2xl m-4">
                            The cart is empty
                        </p>
                    )}
                </div>

                <div className="h-fit flex flex-col items-center justify-between
                 poppins bg-[#fff9ef] sm:px-8 lg:px-16 py-2 sm:my-10 lg:my-0">
                    <div className="py-2 text-[32px] font-[600]">
                        <h3>Cart Totals</h3>
                    </div>

                    <div className="py-3 w-full flex flex-col items-center justify-center">
                        {
                            cart?.map((product) => (
                                <div key={product._id} className="py-2 w-full flex items-center justify-between">
                                    <p className="text-[16px] font-[500]">Subtotal</p>
                                    <p className="text-[#9f9f9f] text-[16px] font-[400]">Rs. {product.price * (product.quantity ?? 1)}</p>
                                </div>
                            ))
                        }
                        <div className="py-3 w-full flex items-center justify-between">
                            <p className="text-[16px] font-[500]">Total</p>
                            <p className="text-[#b88e2f]  text-[20px] font-[500]">Rs. {totalPrice}</p>
                        </div>
                    </div>

                    <div className="sm:pb-1 lg:pb-16 pt-0 flex items-center justify-center w-full">
                        <Link href="/checkout"><button className="border-[1px]
                         border-[#000000] rounded-[12px] py-[15px] px-[62px] mt-[5px] poppins font-[400]
                          text-[20px]">
                            Check Out
                        </button>
                        </Link>
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