export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { 
        name: 'orderNumber', 
        type: 'string', 
        title: 'Order Number' 
      },
      { 
        name: 'customer', 
        type: 'reference', 
        to: [{ type: 'customer' }],
        title: 'Customer' 
      },
      { 
        name: 'products', 
        type: 'array', 
        title: 'Ordered Products', 
        of: [
          { 
            type: 'object', 
            fields: [
              { name: 'product', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
              { name: 'quantity', type: 'number', title: 'Quantity' }
            ]
          }
        ] 
      },
      { 
        name: 'totalAmount', 
        type: 'number', 
        title: 'Total Amount' 
      },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Order Status', 
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Confirmed', value: 'confirmed' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ]
        }
      },
      { 
        name: 'createdAt', 
        type: 'datetime', 
        title: 'Order Placed At' 
      }
    ]
  };
  