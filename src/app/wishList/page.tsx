// "use client"

// import Navbar from "../../components/Navbar"
// import Image from "next/image"
// import { productsData } from "@/context/data/context"
// import { useContext, useEffect, useState } from "react"

// export default function WishList() {

//     const { wishList, setWishList } = useContext(productsData) || {};
//     const [hydrated, setHydrated] = useState(false);


//     const handleRemoveFromWishList = (index: number) => {
//         if (!setWishList || !wishList) return;

//         const updatedWishList = wishList.filter((_, idx) => idx !== index);
//         setWishList(updatedWishList);
//     };


//     return (
//         <>
//             <Navbar isHome={false} />
//             <div className="relative flex items-center justify-center w-full h-[315px]">
//                 <div className="absolute inset-0 -z-10">
//                     <Image className="opacity-65 w-full h-full object-cover" src="/background2.webp" alt="Background" width={1900} height={400} />
//                 </div>
//                 <div className="flex flex-col justify-center items-center p-0 m-0 sm:w-[100%] lg:w-[35%]">
//                     <div className="poppins font-[500] text-[48px] text-center">
//                         <h2>Wish List</h2>
//                     </div>
//                     <div className="sm:w-[46%] md:w-[30%] lg:w-[60%] xl:w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
//                         <h3 className="font-[500] text-[16px]">Home</h3>
//                         <i className="fa-solid fa-angle-right"></i>
//                         <h3 className="font-[300] text-[16px]">Wish List</h3>
//                     </div>
//                 </div>
//             </div>

//             <div className="w-full flex sm:flex-col big:flex-row items-start justify-evenly
//             sm:px-1 sm:py-2 md:px-10 md:py-10 lg:px-10 lg:py-16 big:gap-2 xl:gap-0">
//                 <div className="sm:w-[95%] md:w-full xl:w-auto poppins overflow-x-auto">
//                     {wishList && wishList.length > 0 ? (
//                         <table className="scrollbar table-auto border-collapse border-transparent text-left">
//                             <tbody>
//                                 {wishList.map((product, index) => (
//                                     <tr key={product._id} className="bg-white hover:bg-gray-100">
//                                         <td className="pl-0 sm:pr-3 md:pr-6 sm:py-2 md:py-10 border border-transparent">
//                                             <div className="flex items-center justify-center bg-[#fbebb5] p-0 m-0 rounded-lg sm:w-[50px] sm:h-[50px] md:w-[105px] md:h-[105px]">
//                                                 <Image className="w-[85%] h-auto" src={product.image_url} alt="" width={400} height={300} />
//                                             </div>
//                                         </td>
//                                         <td className="text-[#9f9f9f] sm:text-[12px] md:text-[16px] font-[400] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">{product.product_name}</td>
//                                         <td className="text-[#9f9f9f] sm:text-[12px] md:text-[16px] font-[400] sm:px-1 sm:py-2 md:px-6 md:py-4 border border-transparent">Rs. {product.price}</td>
//                                         <td className="text-[#fbebb5] text-[18px] font-[400] sm:px-1 sm:py-2 lg:px-6 lg:py-4 border border-transparent">
//                                             <i onClick={() => handleRemoveFromWishList(index)} className="hover:cursor-pointer fa-solid fa-trash"></i>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     ) : (
//                         <p className="overflow-hidden flex items-center justify-center poppins font-[500] sm:text-sm md:text-2xl m-4 sm:min-h-screen lg:min-h-56">
//                             The Wish List is empty
//                         </p>
//                     )}
//                 </div>
//             </div>

//             <div className="flex sm:flex-col lg:flex-row lg:items-start big:items-center
//             justify-evenly sm:space-y-4 md:space-y-8 lg:space-y-0 lg:space-x-2 sm:py-10
//             lg:py-28 sm:px-4 lg:px-20 m-0 bg-[#faf4f4]">
//                 <div className="lg:w-1/3 sm:w-full flex flex-col justify-center md:items-center lg:items-start p-0 m-0">
//                     <div className="p-0 m-0 poppins font-[500] sm:text-[28px] lg:text-[32px]">
//                         <h1>
//                             Free Delivery
//                         </h1>
//                     </div>
//                     <div>
//                         <p className="p-0 m-0 poppins font-[400] sm:text-[18px] lg:text-[20px] text-[#9f9f9f]">
//                             For all oders over $50, consectetur adipim scing elit.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="lg:w-1/3 sm:w-full flex flex-col justify-center md:items-center lg:items-start p-0 m-0">
//                     <div className="p-0 m-0 poppins font-[500] sm:text-[28px] lg:text-[32px]">
//                         <h1>
//                             90 Days Return
//                         </h1>
//                     </div>
//                     <div>
//                         <p className="p-0 m-0 poppins font-[400] sm:text-[18px] lg:text-[20px] text-[#9f9f9f]">
//                             If goods have problems, consectetur adipim scing elit.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="lg:w-1/3 sm:w-full flex flex-col justify-center md:items-center lg:items-start p-0 m-0">
//                     <div className="p-0 m-0 poppins font-[500] sm:text-[28px] lg:text-[32px]">
//                         <h1>
//                             Secure Payment
//                         </h1>
//                     </div>
//                     <div>
//                         <p className="p-0 m-0 poppins font-[400] sm:text-[18px] lg:text-[20px] text-[#9f9f9f]">
//                             100% secure payment, consectetur adipim scing elit.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }