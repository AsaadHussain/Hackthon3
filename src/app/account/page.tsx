"use client"

import Image from "next/image"
import Navbar from "../../components/Navbar/index"

export default function Account() {
    return (
        <>
            <Navbar isHome={false} />
            <div className="relative flex items-center justify-center w-full h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <Image className="opacity-65 w-full h-full object-cover" src="/background2.webp" alt="Background" width={1900} height={400} />
                </div>
                <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[100%] lg:w-[35%]">
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>My Account</h2>
                    </div>
                    <div className="sm:w-[48%] md:w-[30%] lg:w-[60%] xl:w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">My Account</h3>
                    </div>
                </div>
            </div>

            <div className="flex sm:flex-col lg:flex-row sm:justify-center sm:items-center
             lg:justify-start lg:items-start sm:px-0 lg:px-24 xl:px-36 sm:py-4 lg:py-24 m-0 big:gap-4 xl:gap-0 w-full poppins">
                <div className="flex flex-col justify-center sm:items-center lg:items-start p-0 m-0
                 sm:w-[95%] lg:w-1/2 gap-12">
                    <div className="font-[600] text-[36px]">
                        <h2>
                            Log In
                        </h2>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">
                            Username or email address
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[60px] sm:w-[290px] big:h-[75px] big:w-[420px] border-[2px]
                         border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>

                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">
                            Password
                        </p>
                        <div className="font-[500] text-[16px] sm:h-[60px] sm:w-[290px] big:h-[75px] big:w-[420px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center font-[400] text-[16px] space-x-2">
                        <input type="checkbox" className="w-6 h-6" /> {/* Adjusted size */}
                        <p>Remember me</p>
                    </div>

                    <div className="flex items-center sm:justify-center lg:justify-start
                     sm:w-[90%] md:w-[43%] lg:w-full">
                        <button className="flex items-center justify-around border-[1px]
                         border-[#000000] rounded-[12px] py-[15px] sm:px-[20px] big:px-[80px]
                          poppins font-[400] text-[20px]">
                            Log In
                        </button>
                        <button className="sm:w-1/2 flex items-center justify-around py-[15px] px-[20px]
                         ml-4 poppins font-[300] text-[16px]">
                            Lost Your Password?
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:items-center lg:items-start justify-center
                 sm:w-[95%] lg:w-1/2 p-0 sm:mt-10 lg:m-0 gap-12">
                    <div className="font-[600] text-[36px]">
                        <h2>
                            Register
                        </h2>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">
                            Email address
                        </p>
                        <div className="font-[500] text-[16px]sm:h-[60px] sm:w-[290px] big:h-[75px] big:w-[420px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 font-[300] text-[16px] sm:w-[95%] lg:w-[90%] xl:w-[80%]
                     text-justify sm:pb-0 big:pb-12 xl:pb-6">
                        <p>
                            A link to set a new password will be sent to your email address.
                        </p>
                        <p>
                            Your personal data will be used to support your experience throughout
                            this website, to manage access to your account, and for other purposes
                            described in our <button className="font-[600] text-[16px]">privacy policy</button> .
                        </p>
                    </div>
                    <div>
                        <button className="flex items-center justify-around border-[1px] border-[#000000]
                         rounded-[12px] py-[15px] px-[68.5px] sm:mt-[0px] xl:mt-[6px] poppins font-[400] text-[20px]">
                            Register
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

