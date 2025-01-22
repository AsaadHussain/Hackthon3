export default {
    name: 'inventory',
    type: 'document',
    title: 'Inventory',
    fields: [
      { 
        name: 'product', 
        type: 'reference', 
        to: [{ type: 'product' }],
        title: 'Product' 
      },
      { 
        name: 'stock', 
        type: 'number', 
        title: 'Stock Quantity' 
      },
      { 
        name: 'lastUpdated', 
        type: 'datetime', 
        title: 'Last Updated' 
      }
    ]
  };
  