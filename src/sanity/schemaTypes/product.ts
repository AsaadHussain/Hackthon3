export const ProductSchema = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'product_name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'discount',
            type: 'number',
            title: 'Price After Discount',
        },
        {
            name: 'stock_quantity',
            type: 'number',
            title: 'Stock',
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
        },
        {
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'add tags like EDT, EDP, male'
        },
        {
            name: 'size',
            type: 'number',
            title: 'Size',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            options: {
                hotspot: true // Enables cropping and focal point selection
            }
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Product Rating'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options:{
                source:"product_name"
            }
        }
    ]
};