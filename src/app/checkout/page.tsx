"use client"
import Link from "next/link"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import { useState } from "react"

type RadioButton = "bankTransfer" | "COD" | "mobilepay";


export default function Checkout() {

    const [radioSelect, setRadioSelect] = useState<RadioButton | null>(null)
    const handleRadio = (value: RadioButton) => {
        setRadioSelect(value)
    }

    return (
        <>
            <Navbar isHome={false} />
            <div className="relative flex items-center justify-center w-full h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <Image className="opacity-65 w-full h-full object-cover" src="/background2.webp" alt="Background" width={1900} height={400} />
                </div>
                <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[100%] lg:w-[35%]">
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>Checkout</h2>
                    </div>
                    <div className="sm:w-[46%] md:w-[30%] lg:w-[60%] xl:w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Checkout</h3>
                    </div>
                </div>
            </div>

            <div className="flex sm:flex-col xl:flex-row items-start justify-start
             sm:pl-2 md:px-36 sm:py-10 lg:py-24 m-0 w-full poppins">
                <div className="flex flex-col justify-start items-start p-0 m-0 sm:w-full lg:w-1/2 sm:gap-8 lg:gap-12">
                    <div className="font-[600] text-[36px]">
                        <h2>
                            Billing details
                        </h2>
                    </div>
                    <div className="flex sm:flex-col md:flex-row sm:items-center lg:items-start justify-start sm:gap-4 md:gap-8">
                        <div className="font-[500] text-[16px]">
                            <p className="sm:pb-2 lg:pb-6">
                                First Name
                            </p>
                            <div className="font-[500] text-[16px] sm:h-[50px] md:h-[75px] w-[209px] border-[2px] border-[#9f9f9f] rounded-xl">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full h-full p-4 rounded-xl outline-none"
                                />
                            </div>
                        </div>
                        <div className="font-[500] text-[16px]">
                            <p className="sm:pb-2 lg:pb-6">
                                Last Name
                            </p>
                            <div className="font-[500] text-[16px] sm:h-[50px] md:h-[75px] w-[209px] border-[2px] border-[#9f9f9f] rounded-xl">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full h-full p-4 rounded-xl outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            Company Name (Optional)
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            Country / Region
                        </p>
                        <div className="sm:pl-3 md:pl-4 flex items-center justify-start text-center
                         font-[400] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px]
                          border-[2px] border-[#9f9f9f] rounded-xl relative">
                            <select
                                name=""
                                id=""
                                className="appearance-none bg-transparent focus:outline-none w-full pr-6"
                            >
                                <option value="">Pakistan</option>
                                <option value="">Sri Lanka</option>
                                <option value="">Bangladesh</option>
                                <option value="">India</option>
                            </select>
                            <div className="absolute right-4 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            Street address
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            Town / City
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            Province
                        </p>
                        <div className="sm:pl-3 lg:pl-4 flex items-center justify-start text-center font-[400] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl relative">
                            <select
                                name=""
                                id=""
                                className="appearance-none bg-transparent focus:outline-none w-full pr-6"
                            >
                                <option value="">Western Province</option>
                            </select>
                            <div className="absolute right-4 pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            ZIP code
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            Phone
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="sm:pb-2 lg:pb-6">
                            Email address
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <div className="font-[500] sm:text-[14px] lg:text-[16px] sm:h-[50px] sm:w-[209px] md:h-[75px] md:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder="Additional Information"
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="poppins flex flex-col justify-center items-start
                 sm:py-8 lg:py-10 m-0 sm:w-[95%] xl:w-1/2 sm:gap-4 lg:gap-6">
                    <div className=" flex justify-between items-start py-2 m-0 w-full">
                        <div className="flex flex-col justify-center items-start p-0 m-0 gap-4">
                            <h3 className="font-[500] sm:text-[18px] lg:text-[24px] py-2">Product</h3>
                            <p className="text-[#9f9f9f] font-[400] sm:text-[12px] lg:text-[16px]">Asgaard sofa&ensp;<span className="font-[500] text-[12px] text-black">&emsp;X&emsp;1</span></p>
                            <p className="font-[400] sm:text-[12px] lg:text-[16px]">Subtotal</p>
                            <p className="font-[400] sm:text-[12px] lg:text-[16px]">Total</p>
                        </div>
                        <div className="flex flex-col justify-center items-end p-0 m-0 gap-4">
                            <h3 className="font-[500] sm:text-[18px] lg:text-[24px] py-2">Subtotal</h3>
                            <p className="font-[300] sm:text-[12px] lg:text-[16px]">Rs. 250,000.00</p>
                            <p className="font-[300] sm:text-[12px] lg:text-[16px]">Rs. 250,000.00</p>
                            <p className="text-[#b88e2f] font-[700] sm:text-[18px] lg:text-[24px]">Rs. 250,000.00</p>
                        </div>
                    </div>

                    <hr className="my-1 bg-[#d9d9d9] w-full h-[1.5px]" />

                    <div className="poppins">
                        <div className=" my-0 pb-6">
                            <div className="pb-4 gap-4 flex items-center justify-start font-[400] sm:text-[14px] md:text-[16px]">
                                <input type="radio" onChange={() => handleRadio("bankTransfer")} checked={radioSelect === "bankTransfer"} />
                                <p>Direct Bank Transfer</p>
                            </div>
                            {radioSelect === "bankTransfer" && (
                                <p className="text-[#9f9f9f] font-[300] sm:text-[14px] md:text-[16px] text-justify">
                                    Make your payment directly into our bank account. Please use your
                                    Order ID as the payment reference. Your order will not be shipped
                                    until the funds have cleared in our account.
                                </p>
                            )}
                        </div>
                        <div className=" my-0 pb-6">
                            <div className="pb-4 gap-4 flex items-center justify-start font-[400] sm:text-[14px] md:text-[16px]">
                                <input type="radio" onChange={() => handleRadio("mobilepay")} checked={radioSelect === "mobilepay"} />
                                <p>Mobile Pay</p>
                            </div>
                            {radioSelect === "mobilepay" && (
                                <p className="text-[#9f9f9f] font-[300] sm:text-[14px] md:text-[16px] text-justify">
                                    Make your payment using any mobile and online payment service like google pay,
                                    samsung pay, apple pay into our bank account. Please use yourOrder ID as the
                                    payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            )}
                        </div>
                        <div className=" my-0 pb-6">
                            <div className="pb-4 gap-4 flex items-center justify-start font-[400] sm:text-[14px] md:text-[16px]">
                                <input type="radio" onChange={() => handleRadio("COD")} checked={radioSelect === "COD"} />
                                <p>Cash On Delivery</p>
                            </div>
                            {radioSelect === "COD" && (
                                <p className="text-[#9f9f9f] font-[300] sm:text-[14px] md:text-[16px] text-justify">
                                    Make your payment directly when you recieve your order, feel free to check and
                                    confirm your order to satisfy yourself. Please use your Order ID as the payment
                                    reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="p-0 m-0">
                        <p className="text-[#000] font-[300] text-[16px] text-justify p-0 m-0">
                            Your personal data will be used to support your experience throughout
                            this website, to manage access to your account, and for other purposes
                            described in our <button className="font-[600] text-[16px]">privacy policy</button> .
                        </p>
                    </div>
                    <div className="py-4 flex items-center justify-center w-full">
                        <Link href="/"><button className="border-[1px]
                         border-[#000000] rounded-[12px] py-[15px] px-[90px] mt-[6px] poppins font-[400]
                          text-[20px]">
                            Place order
                        </button></Link>
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