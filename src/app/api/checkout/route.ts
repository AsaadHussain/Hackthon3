import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Product } from "../../../context/data/context";
import { RadioButton } from "../../checkout/page";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2025-01-27.acacia",
});

export async function POST(req: NextRequest) {
    try {
        const { products, payment }: { products: Product[], payment : RadioButton } = await req.json();

        if (!products || products.length === 0) {
            return NextResponse.json({ error: "No products in request" }, { status: 400 });
        }

        if (!payment) {
            return NextResponse.json({ error: "No payment method selected" }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: [payment],
            mode: "payment",
            success_url: "http://localhost:3000/",
            cancel_url: "http://localhost:3000/cart",
            line_items: products.map((product: Product) => ({
                quantity: product.quantity ?? 1,
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.product_name || "Unnamed Product",
                        description: product.description ?? "No description available",
                        images: [product.image_url]
                    },
                    unit_amount: product.price * 10,
                }
            }))
        });

        console.log("Session ID:", session.id);
        return NextResponse.json({ sessionId: session.id });

    } catch (error: any) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
