"use client"
import Image from "next/image"
import Link from "next/link"



export default function Footer() {
    return (
        <>
            <div className="flex flex-col justify-between items-center sm:py-10 lg:pt-24 bg-[#fefefe] w-full" >

                <div className="px-10 mt-0 mb-10 md:mb-16">
                    <Image className="sm:w-[150px] lg:w-[180px] h-auto" src="/aromas.png" width={400} height={300} alt="" />
                </div>

                <div className="flex sm:flex-col lg:flex-row justify-evenly items-center sm:w-full lg:w-11/12 ">

                    <div className="flex flex-col justify-center items-start sm:w-[90%] lg:w-[23%] sm:mb-10 lg:mb-0 font-[400] text-[16px] text-[#9f9f9f]">
                        <p>
                            400 University Drive Suite 200 Coral Gables,
                        </p>
                        <p>
                            FL 33134 USA
                        </p>
                    </div>

                    <div className="flex sm:flex-col md:flex-row justify-evenly items-start sm:w-[80%] md:w-[100%] lg:w-[77%]">
                        <div className="poppins font-[500] text-[16px] flex flex-col justify-center items-start">
                            <h3 className="sm:pb-3 md:pb-10 text-[#9f9f9f]">Links</h3>
                            <ul className=" flex flex-col font-[500] text-[16px] text-black">
                                <li className="pb-8 hover:text-gray-300 cursor-pointer"><Link href="/">Home</Link></li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer"><Link href="/shop">Shop</Link></li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer"><Link href="/blog">About</Link></li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer"><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="font-[500] text-[16px] poppins flex flex-col justify-center items-start">
                            <h3 className="sm:pb-3 md:pb-10 text-[#9f9f9f]">Help</h3>
                            <ul className="flex flex-col justify-end text-black">
                                <li className="pb-8 hover:text-gray-300 cursor-pointer"><Link href="/">Payment Options</Link></li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer"><Link href="/">Returns</Link></li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer"><Link href="/">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="poppins flex flex-col justify-center items-start">
                            <h3 className="sm:pb-3 md:pb-10 text-[#9f9f9f]">Newsletter</h3>
                            <div className="flex sm:flex-col lg:flex-row justify-center text-black">
                                <input className="bg-[#fefefe] w-[200px] pb-1 border-b-[2px] border-black font-[400] text-[14px]" type="text" placeholder="Enter Your Email Address" />
                                <div className="sm:pl-0 sm:mt-4 lg:mt-0 lg:pl-4 poppins font-[500] text-[14px]">
                                    <button className="border-b-[2px] border-black pb-1">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="bg-gray-300 w-11/12 pb-[2px] my-10" />

                <div className="poppins font-[400] text-[16px] w-11/12 flex justify-start items-center sm:pb-1 lg:pb-10">
                    <p>
                        &copy; 2025 Asaad, All rights reverved
                    </p>
                </div>

            </div>
        </>
    )
}
