"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { ProductData, IproductData } from "./context"

export const DataProvider = ({ children }: { children: ReactNode }) => {

    const [products, setProducts] = useState<IproductData["products"] | never[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://hackathon-figma-jam.vercel.app/api/product")//http://localhost:3000/api/product
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchProducts()
    }, [])

    const productData: IproductData = {
        products,
    }
    return (
        <ProductData.Provider value={productData}>
            {children}
        </ProductData.Provider>
    )
}