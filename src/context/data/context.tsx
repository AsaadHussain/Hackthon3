
import { createContext, Dispatch, SetStateAction } from "react";

export interface Product {
    _id: string;
    product_name: string;
    price: number;
    description: string;
    size: number;
    category: string;
    tags: string[];
    stock_quantity: number;
    image_url: string;
    rating: number;
    slug: string;
    quantity ?: number;
}

interface ProductContextType {
    products: Product[];
    cart: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
    setCart: Dispatch<SetStateAction<Product[]>>;
}

export const productsData = createContext<ProductContextType | undefined>(undefined);
