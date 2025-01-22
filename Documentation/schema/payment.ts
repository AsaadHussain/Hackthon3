export default {
    name: 'payment',
    type: 'document',
    title: 'Payment',
    fields: [
      { 
        name: 'order', 
        type: 'reference', 
        to: [{ type: 'order' }],
        title: 'Order' 
      },
      { 
        name: 'amount', 
        type: 'number', 
        title: 'Payment Amount' 
      },
      { 
        name: 'paymentMethod', 
        type: 'string', 
        title: 'Payment Method', 
        options: {
          list: [
            { title: 'Credit Card', value: 'creditCard' },
            { title: 'PayPal', value: 'paypal' },
            { title: 'COD', value: 'cod' }
          ]
        }
      },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Payment Status', 
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
            { title: 'Failed', value: 'failed' }
          ]
        }
      },
      { 
        name: 'transactionId', 
        type: 'string', 
        title: 'Transaction ID' 
      },
      { 
        name: 'paymentDate', 
        type: 'datetime', 
        title: 'Payment Date' 
      }
    ]
  };
  