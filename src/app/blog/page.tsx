"use client"

import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Blog() {
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
                        <h2>Blog</h2>
                    </div>
                    <div className="w-[30%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Blog</h3>
                    </div>
                </div>
            </div>

            <div className="pt-24 w-full flex items-center justify-center">
                <div className="poppins flex items-start justify-between w-[90%]">
                    <div className="flex flex-col items-center justify-center w-[63%] gap-8">
                        <div className="flex flex-col items-start justify-center w-full gap-2">
                            <div>
                                <img className="object-cover w-full h-auto" src="./Rectangle 68.png" alt="" />
                            </div>
                            <div className="py-2 text-[16px] font-[400] text-[#9f9f9f] flex items-center justify-start gap-10">
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-user"></i>
                                    <p>Admin</p>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-calendar"></i>
                                    <p>14 Oct 2022</p>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-tag"></i>
                                    <p>Wood</p>
                                </div>
                            </div>
                            <div className="text-[30px] font-[500] flex items-center justify-start py-1">
                                <h3>Going all-in with millennial design</h3>
                            </div>
                            <div className="text-justify text-[15px] font-[400] text-[#9f9f9f] flex items-center justify-start py-1">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
                                    ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam
                                    ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                                    Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                                    Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                    ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare
                                    aenean euismod elementum.
                                </p>
                            </div>
                            <div className="poppins font-[400] text-[16px] py-4">
                                <Link href="/blog">
                                    <button className="relative after:content-[''] after:block after:w-[80%] after:h-[1.5px] after:bg-black after:mx-auto after:mt-[8px]">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-2">
                            <div>
                                <img className="object-cover w-full h-auto" src="./Rectangle 68 (1).png" alt="" />
                            </div>
                            <div className="py-2 text-[16px] font-[400] text-[#9f9f9f] flex items-center justify-start gap-10">
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-user"></i>
                                    <p>Admin</p>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-calendar"></i>
                                    <p>14 Oct 2022</p>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-tag"></i>
                                    <p>Handmade</p>
                                </div>
                            </div>
                            <div className="text-[30px] font-[500] flex items-center justify-start py-1">
                                <h3>Exploring new ways of decorating</h3>
                            </div>
                            <div className="text-justify text-[15px] font-[400] text-[#9f9f9f] flex items-center justify-start py-1">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
                                    ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam
                                    ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                                    Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                                    Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                    ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare
                                    aenean euismod elementum.
                                </p>
                            </div>
                            <div className="poppins font-[400] text-[16px] py-4">
                                <Link href="/blog">
                                    <button className="relative after:content-[''] after:block after:w-[80%] after:h-[1.5px] after:bg-black after:mx-auto after:mt-[8px]">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-2">
                            <div>
                                <img className="object-cover w-full h-auto" src="./Rectangle 68 (2).png" alt="" />
                            </div>
                            <div className="py-2 text-[16px] font-[400] text-[#9f9f9f] flex items-center justify-start gap-10">
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-user"></i>
                                    <p>Admin</p>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-calendar"></i>
                                    <p>14 Oct 2022</p>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <i className="fa-solid fa-tag"></i>
                                    <p>Wood</p>
                                </div>
                            </div>
                            <div className="text-[30px] font-[500] flex items-center justify-start py-1">
                                <h3>Handmade pieces that took time to make</h3>
                            </div>
                            <div className="text-justify text-[15px] font-[400] text-[#9f9f9f] flex items-center justify-start py-1">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
                                    ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam
                                    ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                                    Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                                    Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
                                    ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare
                                    aenean euismod elementum.
                                </p>
                            </div>
                            <div className="poppins font-[400] text-[16px] py-4">
                                <Link href="/blog">
                                    <button className="relative after:content-[''] after:block after:w-[80%] after:h-[1.5px] after:bg-black after:mx-auto after:mt-[8px]">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[30%]">
                        <div className="mb-2 relative font-[400] text-[16px] h-[65px] w-[350px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full py-4 px-6 rounded-xl outline-none pr-10"
                                aria-label="Search"
                            />
                            <i className="absolute top-1/2 right-3 text-[24px] transform -translate-y-1/2 fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="w-[70%] poppins">
                            <div className="font-[500] text-[24px] py-10">
                                <h4>Categories</h4>
                            </div>
                            <div className="w-full flex flex-col items-center justify-between font-[400] text-[16px] text-[#9f9f9f] gap-10">
                                <div className="w-full flex items-center justify-between">
                                    <p>Crafts</p>
                                    <p>2</p>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <p>Design</p>
                                    <p>8</p>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <p>Handmade</p>
                                    <p>7</p>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <p>Interior</p>
                                    <p>1</p>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <p>Wood</p>
                                    <p>6</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] py-28">
                            <div className="py-6 font-[500] text-[24px]">
                                <h4>Recent Posts</h4>
                            </div>
                            <div className="flex flex-col items-center justify-start gap-10 poppins">
                                <div className="w-full hover:cursor-pointer flex items-center justify-start gap-3">
                                    <div className="w-[80px] h-[80px]">
                                        <img className="object-cover w-full h-full rounded-lg " src="./img1Blog.jpg" alt="" />
                                    </div>
                                    <div className="w-[60%] flex flex-col items-start justify-center gap-[3px]">
                                        <h6 className="font-[400] text-[14px]">Going all-in with millennial design</h6>
                                        <p className="font-[400] text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className="w-full hover:cursor-pointer flex items-center justify-start gap-3">
                                    <div className="w-[80px] h-[80px]">
                                        <img className="object-cover w-full h-full rounded-lg " src="./img2Blog.jpg" alt="" />
                                    </div>
                                    <div className="w-[60%] flex flex-col items-start justify-center gap-[3px]">
                                        <h6 className="font-[400] text-[14px]">Exploring new ways of decorating</h6>
                                        <p className="font-[400] text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className="w-full hover:cursor-pointer flex items-center justify-start gap-3">
                                    <div className="w-[80px] h-[80px]">
                                        <img className="object-cover w-full h-full rounded-lg " src="./img3Blog.jpg" alt="" />
                                    </div>
                                    <div className="w-[63%] flex flex-col items-start justify-center gap-[3px]">
                                        <h6 className="font-[400] text-[14px]">Handmade pieces that took time to make</h6>
                                        <p className="font-[400] text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className="w-full hover:cursor-pointer flex items-center justify-start gap-3">
                                    <div className="w-[80px] h-[80px]">
                                        <img className="object-cover w-full h-full rounded-lg " src="./img4Blog.jpg" alt="" />
                                    </div>
                                    <div className="w-[50%] flex flex-col items-start justify-center gap-[3px]">
                                        <h6 className="font-[400] text-[14px]">Modern home in Milan</h6>
                                        <p className="font-[400] text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                                    </div>
                                </div>
                                <div className="w-full hover:cursor-pointer flex items-center justify-start gap-3">
                                    <div className="w-[80px] h-[80px]">
                                        <img className="object-cover w-full h-full rounded-lg " src="./img5Blog.jpg" alt="" />
                                    </div>
                                    <div className="w-[50%] flex flex-col items-start justify-center gap-[3px]">
                                        <h6 className="font-[400] text-[14px]">Colorful office redesign</h6>
                                        <p className="font-[400] text-[12px] text-[#9f9f9f]">03 Aug 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center py-12" >
                <div className="w-2/5 flex items-center justify-evenly poppins font-[400] text-[20px]" >
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                            1
                        </button>
                    </div>
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#d4bf6e]">
                            2
                        </button>
                    </div>
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#d4bf6e]">
                            3
                        </button>
                    </div>
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#d4bf6e]">
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