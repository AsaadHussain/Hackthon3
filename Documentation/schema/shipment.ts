export default {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      { 
        name: 'order', 
        type: 'reference', 
        to: [{ type: 'order' }],
        title: 'Order' 
      },
      { 
        name: 'trackingNumber', 
        type: 'string', 
        title: 'Tracking Number' 
      },
      { 
        name: 'carrier', 
        type: 'string', 
        title: 'Carrier' 
      },
      { 
        name: 'status', 
        type: 'string', 
        title: 'Shipment Status', 
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'In Transit', value: 'inTransit' },
            { title: 'Delivered', value: 'delivered' }
          ]
        }
      },
      { 
        name: 'lastUpdated', 
        type: 'datetime', 
        title: 'Last Updated' 
      }
    ]
  };
  