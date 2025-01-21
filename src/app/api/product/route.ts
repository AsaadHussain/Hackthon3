
import { products } from "@/data/products";

export async function GET() {
    return new Response(JSON.stringify(products),{
        headers:{
            "Content-Type": "application/json"
        }
    })
}