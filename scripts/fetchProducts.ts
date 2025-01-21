import { client } from "../src/sanity/lib/client"

export const getFourProducts = async () => {
    const products = await client.fetch(
        `*[_type=="product"][0..3]{
  _id,
    product_name,
    price,
    description,
    size,
    category,
    tags,
    stock_quantity,
    "image_url":image.asset->url,
      rating,
    "slug":slug.current
}`
    )
    return products
}

export const getAllProducts = async () => {
    const products = await client.fetch(
        `*[_type=="product"]{
  _id,
    product_name,
    price,
    description,
    size,
    category,
    tags,
    stock_quantity,
    "image_url":image.asset->url,
      rating,
    "slug":slug.current
}`
    )
    return products
}

