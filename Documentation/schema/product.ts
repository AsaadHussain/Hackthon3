export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { 
        name: 'name', 
        type: 'string', 
        title: 'Product Name' 
      },
      { 
        name: 'slug', 
        type: 'slug', 
        title: 'Slug', 
        options: { 
          source: 'name', 
          maxLength: 96 
        } 
      },
      { 
        name: 'sku', 
        type: 'string', 
        title: 'SKU' 
      },
      { 
        name: 'description', 
        type: 'text', 
        title: 'Description' 
      },
      { 
        name: 'price', 
        type: 'number', 
        title: 'Price' 
      },
      { 
        name: 'discount', 
        type: 'number', 
        title: 'Discount (%)' 
      },
      { 
        name: 'category', 
        type: 'string', 
        title: 'Category' 
      },
      { 
        name: 'tags', 
        type: 'array', 
        title: 'Tags', 
        of: [{ type: 'string' }]
      },
      { 
        name: 'size', 
        type: 'number', 
        title: 'Size (ml)' 
      },
      { 
        name: 'stock', 
        type: 'number', 
        title: 'Stock Level' 
      },
      { 
        name: 'rating', 
        type: 'number', 
        title: 'Rating', 
        options: { 
          precision: 1 
        } 
      },
      { 
        name: 'images', 
        type: 'array', 
        title: 'Product Images', 
        of: [{ type: 'image' }]
      }
    ]
  };
  