"use client"

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AdminPanel() {

  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/")
  }

  const handleStudioClick = () => {
    setLoading(true);
    router.push("/studio")
  }

  return (
    <>
      <Navbar isHome={true} />
      <div className="bg-[#fff9ef] poppins flex flex-col items-center justify-center h-screen p-0 m-0">
        <h1 className="sm:text-2xl md:text-4xl font-[500] text-gray-800 p-0 m-10">Welcome to Admin Panel of Aromas</h1>
        <div className="flex sm:flex-col lg:flex-row items-center justify-center p-0 m-0 gap-4">
          <p className="sm:text-sm md:text-2xl font-[400]"> Go to Sanity Studio to manage Inventory</p>
          {loading ? (
            <p className="text-xl font-semibold text-gray-700">Loading...</p>
          ) : (
            <button
              onClick={handleStudioClick}
              className="sm:text-2xl md:text-4xl font-[500] border-b-[3px] border-black sm:pb-2 md:pb-3 m-2"
            >
              Studio
            </button>
          )}
        </div>
        <button className="border-[2px] rounded-lg border-black px-16 py-4 mt-6 text-[20px]" onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}
