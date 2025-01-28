
"use client"

import Link from "next/link"
import styles from '@/components/Navbar/header.module.css';
import Image from "next/image";
import { useState } from "react";


type NavbarProps = {
    isHome?: boolean
}

export default function Navbar({ isHome = false }: NavbarProps) {

    const [drawer, setDrawer] = useState(false);

    const handleDrawer = () => {
        setDrawer(!drawer);
    }

    return (
        <>
            <div className={`flex justify-between items-center pt-12 pb-10 h-16 ${isHome ? styles.homeHeader : styles.defaultHeader}`}>

                <div className="sm:block lg:hidden p-5 text-[26px] z-20">
                    <i onClick={handleDrawer} className={`${drawer ? "fa-xmark" : "fa-bars"} fa-solid`}></i>
                </div>
                <div
                    className={`${drawer ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        } ${isHome ? "bg-white" : "bg-[#fbebb5]"} min-h-screen w-3/4 transition-all duration-300 z-10 fixed top-0 left-0`}
                >
                    <ul className="poppins flex flex-col space-y-5 items-center justify-center text-black text-[16px] font-[500] mt-20">
                        <li className=""><Link href="/">Home</Link></li>
                        <li className=""><Link href="/shop">Shop</Link></li>
                        <li className=""><Link href="/blog">About</Link></li>
                        <li className=""><Link href='/contact'>Contact</Link></li>
                        <li className=""><Link href="/account"><i className="fa-solid fa-user"></i></Link></li>
                        <li className=""><Link href="/shop"><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                        <li className=""><i className="fa-regular fa-heart"></i></li>
                        <li className=""><Link href="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>

                    </ul>
                </div>

                <div className="flex lg:justify-start sm:justify-center items-center px-5 sm:w-full lg:w-1/3 lg:pl-20 sm:pl-0 my-1">
                    <Link href="/"><Image className="sm:w-[130px] lg:w-[90px] xl:w-[120px] h-auto" src="/aromas.png" width={400} height={300} alt="" /></Link>
                </div>
                <div className="sm:hidden lg:block lg:p-1 xl:p-10 w-1/3 ">
                    <ul className="poppins flex lg:space-x-2 big:space-x-8 xl:space-x-14 font-[500] lg:text-[11px] big:text-[13px] xl:text-[16px] text-black">
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/">Home</Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/shop">Shop</Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/blog">About</Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="sm:hidden lg:block pr-20 w-1/3">
                    <ul className="flex justify-end lg:space-x-2 big:space-x-6 xl:space-x-8 text-black">
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/account"><i className="fa-solid fa-user"></i></Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/shop"><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><i className="fa-regular fa-heart"></i></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                    </ul>
                </div>

            </div>

        </>
    )
}



