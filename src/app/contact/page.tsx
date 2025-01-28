"use client"
import Image from "next/image"
import Navbar from "../../components/Navbar"



export default function Contact() {
    return (
        <>
            <Navbar isHome={false} />

            <div className="relative flex items-center justify-center w-full h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <Image className="opacity-65 w-full h-full object-cover" src="/background2.webp" alt="Background" width={1900} height={400} />
                </div>
                <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[100%] lg:w-[35%]">
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="sm:w-[48%] md:w-[30%] lg:w-[60%] xl:w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Contact Us</h3>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col items-center justify-center sm:py-16 lg:py-28 bg-white w-full">
                <div className="sm:w-full md:w-2/3 poppins font-[600] text-[36px] text-center">
                    <h1>Get In Touch With Us</h1>
                </div>
                <div className="sm:w-[98%] md:w-[48%] poppins font-[400] text-[16px] p-2 text-center text-[#9f9f9f]" >
                    <p>
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>
            </div>

            <div className="lg:mx-4 sm:py-0 lg:py-2 flex sm:flex-col md:flex-row sm:items-center md:items-start justify-center">
                <div className="sm:ml-3 md:ml-0 lg:ml-4 sm:mb-10 md:mb-0 sm:w-[90%] md:w-1/2 flex items-center justify-center">
                    <div className="sm:w-[90%] lg:w-1/2 poppins flex flex-wrap lg:flex-col sm:justify-start
                     lg:justify-center items-start py-2 m-0 gap-10">
                        <div className="flex items-start justify-center gap-7">
                            <div className="text-[24px]">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <h3 className="text-[24px] font-[500]">
                                    Address
                                </h3>
                                <p className="text-[16px] font-[400]">
                                    236 5th SE Avenue,<br /> New York NY10000,<br /> United States
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center gap-7">
                            <div className="text-[24px]">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <h3 className="text-[24px] font-[500]">
                                    Phone
                                </h3>
                                <p className="text-[16px] font-[400]">
                                    Mobile: +(84) 546-6789
                                </p>
                                <p className="text-[16px] font-[400]">
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center gap-7">
                            <div className="text-[24px]">
                                <i className="fa-solid fa-clock"></i>
                            </div>
                            <div>
                                <h3 className="text-[24px] font-[500]">
                                    Working Time
                                </h3>
                                <p className="w-2/3 text-[16px] font-[400]">
                                    Monday-Friday: 9:00 - 22:00
                                </p>
                                <p className="w-2/3 text-[16px] font-[400]">
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[90%] md:w-1/2 poppins flex flex-col justify-center items-start p-0 sm:ml-3 md:ml-0 gap-12">
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">
                            Your name
                        </p>
                        <div className="font-[400] text-[16px] sm:h-[60px] sm:w-[290px] big:h-[75px] big:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder="Abc"
                                className="w-full h-full py-4 sm:px-4 lg:px-6 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">
                            Email address
                        </p>
                        <div className="font-[400] text-[16px] sm:h-[60px] sm:w-[290px] big:h-[75px] big:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder="Abc@def.com"
                                className="w-full h-full py-4 sm:px-4 lg:px-6 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">
                            Subject
                        </p>
                        <div className="font-[400] text-[16px] sm:h-[60px] sm:w-[290px] big:h-[75px] big:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder="This is an optional"
                                className="w-full h-full py-4 sm:px-4 lg:px-6 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">
                            Message
                        </p>
                        <div className="font-[400] text-[16px] sm:h-[110px] sm:w-[290px] big:h-[135px] big:w-[450px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <textarea
                                placeholder="Hi! i&apos;d like to ask about"
                                className="w-full h-full sm:p-4 lg:p-6 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="pb-16 pt-0 flex items-center justify-start w-full">
                        <button className="border-[1px]
                         border-[#000000] rounded-[12px] py-[12px] sm:px-[115px] lg:px-[95px] mt-[4px] poppins font-[400]
                          text-[16px]">
                            Submit
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