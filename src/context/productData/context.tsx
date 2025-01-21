
import { createContext } from "react";

export interface Product {
    sku: string
    name: string
    price: string
    description: string
    image: string
    category: string
}

export interface IproductData {
    products:Product[]
}

export const ProductData = createContext<IproductData | null>(null)
