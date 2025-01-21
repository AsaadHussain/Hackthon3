"use client"

import Link from "next/link"
import Navbar from "../../components/Navbar"

export default function Cart() {
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
                        <h2>Cart</h2>
                    </div>
                    <div className="w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Cart</h3>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-start justify-evenly px-10 py-16">
                <div className=" poppins overflow-x-auto">
                    <table className="table-auto border-collapse border-transparent text-left">
                        <thead className="">
                            <tr className=" bg-[#fff9ef]">
                                <th className="px-6 py-4 border border-transparent"></th>
                                <th className="text-[16px] font-[500] px-6 py-4 border border-transparent">Product</th>
                                <th className="text-[16px] font-[500] px-6 py-4 border border-transparent">Price</th>
                                <th className="text-[16px] font-[500] px-6 py-4 border border-transparent">Quantity</th>
                                <th className="text-[16px] font-[500] px-6 py-4 border border-transparent">Subtotal</th>
                                <th className="text-[16px] font-[500] px-6 py-4 border border-transparent"></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className=" bg-white hover:bg-gray-100">
                                <td className="pl-0 pr-6 py-10 border border-transparent"><div className="flex items-center justify-center bg-[#fbebb5] 
                            p-0 m-0 rounded-lg w-[105px] h-[105px]">
                                    <img className="w-[105px] h-[90px]" src="./Asgaard sofa 1.png" alt="" />
                                </div>
                                </td>
                                <td className="text-[#9f9f9f] text-[16px] font-[400] px-6 py-4 border border-transparent">Asgaard sofa</td>
                                <td className="text-[#9f9f9f] text-[16px] font-[400] px-6 py-4 border border-transparent">Rs. 250,000.00</td>
                                <td className="text-[16px] font-[400] px-10 py-4 border border-transparent"><div className="flex items-center justify-center rounded-[5px] w-[32px] h-[32px] border-[2px] border-[#9f9f9f]">1</div></td>
                                <td className="text-[16px] font-[400] px-6 py-4 border border-transparent">Rs. 250,000.00</td>
                                <td className="text-[#fbebb5] text-[18px] font-[400] px-6 py-4 border border-transparent"><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="h-[400px] flex flex-col items-center justify-between poppins bg-[#fff9ef] px-16 py-2">
                    <div className="py-2 text-[32px] font-[600]">
                        <h3>Cart Totals</h3>
                    </div>
                    <div className="py-3 w-full flex flex-col items-center justify-center">
                        <div className="py-2 w-full flex items-center justify-between">
                            <p className="text-[16px] font-[500]">Subtotal</p>
                            <p className="text-[#9f9f9f] text-[16px] font-[400]">Rs. 250,000.00</p>
                        </div>
                        <div className="py-3 w-full flex items-center justify-between">
                            <p className="text-[16px] font-[500]">Total</p>
                            <p className="text-[#b88e2f]  text-[20px] font-[500]">Rs. 250,000.00</p>
                        </div>
                    </div>
                    <div className="pb-16 pt-0 flex items-center justify-center w-full">
                        <Link href="/checkout"><button className="border-[1px]
                         border-[#000000] rounded-[12px] py-[15px] px-[62px] mt-[5px] poppins font-[400]
                          text-[20px]">
                            Check Out
                        </button>
                        </Link>
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