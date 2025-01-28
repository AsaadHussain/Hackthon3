
'use client'
import React from "react"
import Link from "next/link";
import Image from "next/image";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void
}

export default function Modal({ isVisible, onClose }: ModalProps) {

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === 'wrapper') onClose();
  }

  if (!isVisible) return null;

  return (
    <div className="overflow-auto fixed inset-0 bg-black bg-opacity-25 
    flex justify-center items-center z-20" id="wrapper" onClick={handleClose}>
      <div className="absolute top-0 right-0 sm:w-[300px] sm:h-[400px] lg:w-[400px]
       lg:h-[600px] py-5 poppins bg-white flex flex-col items-center justify-items-start gap-5">
        <div className="h-[10%] sm:px-5 lg:px-7 w-full flex items-center justify-between">
          <div className="font-[600] sm:text-[18px] lg:text-[24px]">
            <h2>
              Shopping Cart
            </h2>
          </div>
          <div className="text-[#9f9f9f]">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
        <div className="h-[1%] sm:px-5 lg:px-7 flex items-center justify-start w-full">
          <hr className="sm:my-0 lg:my-1 bg-[#d9d9d9] w-4/5 h-[1.5px]" />
        </div>
        <div className="h-[68%] sm:px-5 sm:py-1 lg:px-7 lg:py-2 w-full flex items-start justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="w-2/5">
              <div className="flex items-center justify-center bg-[#fbebb5]
            p-0 m-0 rounded-lg sm:w-[50px] sm:h-[50px] lg:w-[105px] lg:h-[105px]">
              <Image className="object-cover w-[88%] h-auto" src="/attar3.webp" alt="" width={200} height={200}/>
              </div>
            </div>
            <div className="w-2/5 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-start font-[400] sm:text-[12px] lg:text-[16px]">
                <p className="sm:pb-3 lg:pb-6">
                  Asgaard sofa
                </p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="font-[300] sm:text-[12px] lg:text-[16px]">1</p>
                <p className="font-[300] sm:text-[9px] lg:text-[12px]">X</p>
                <p className="font-[500] sm:text-[9px] lg:text-[12px] text-[#b88e2f]">Rs. 250,000.00</p>
              </div>
            </div>
            <div className="flex items-center justify-end w-1/5 text-[#9f9f9f]">
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
        </div>
        <div className="h-[10%] sm:px-5 lg:px-7 w-full flex items-center justify-start gap-20">
          <div>
            <p className="font-[400] sm:text-[12px] lg:text-[16px]">Subtotal</p>
          </div>
          <div>
            <p className="font-[600] sm:text-[12px] lg:text-[16px] text-[#b88e2f]">Rs. 250,000.00</p>
          </div>
        </div>
        <div className="h-[1%] flex items-center justify-start w-full">
          <hr className="my-1 bg-[#d9d9d9] w-full h-[1.5px]" />
        </div>
        <div className="h-[10%] px-7 w-full flex items-center justify-start gap-6">
          <div>
            <Link href="/cart"><button className="font-[400] sm:text-[9px] lg:text-[12px] rounded-full border-[1px] border-black sm:px-6 lg:px-8 py-[4px] m-0">View Cart</button></Link>
          </div>
          <div>
          <Link href="/checkout"><button className="font-[400] sm:text-[9px] lg:text-[12px] rounded-full border-[1px] border-black sm:px-6 lg:px-8 py-[4px] m-0">Checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
