"use client";

import { ReactNode, useEffect, useState } from "react";
import { productsData, Product } from "./context";
import { getAllProducts } from "../../../scripts/fetchProducts";


const DataProvider = ({ children }: { children: ReactNode }) => {
    
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getAllProducts();
            setProducts(fetchedProducts);
        }
        fetchProducts();
    }, []);

    return (
        <productsData.Provider value={{ products, cart, setProducts, setCart }}>
            {children}
        </productsData.Provider>
    );
};

export default DataProvider;
