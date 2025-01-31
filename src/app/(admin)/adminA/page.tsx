import Navbar from "@/components/Navbar";
import Link from "next/link";


export default function AdminPanel() {
  return (
    <>
      <Navbar isHome={true} />
      <div className="bg-[#fff9ef] poppins flex flex-col items-center justify-center h-screen p-0 m-0">
        <h1 className="sm:text-2xl md:text-4xl font-[500] text-gray-800 p-0 m-10">Welcome to Admin Panel of Aromas</h1>
        <div className="flex sm:flex-col lg:flex-row items-center justify-center p-0 m-0 gap-4">
          <p className="sm:text-sm md:text-2xl font-[400]"> Go to Sanity Studio to manage Inventory</p>
          <Link href="/studio"><button className="sm:text-2xl md:text-4xl font-[500] border-b-[3px] border-black sm:pb-2 md:pb-3 m-2">Studio</button></Link>
        </div>
      </div>
    </>
  )
}
