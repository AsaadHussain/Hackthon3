export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { 
        name: 'name', 
        type: 'string', 
        title: 'Customer Name' 
      },
      { 
        name: 'email', 
        type: 'string', 
        title: 'Email' 
      },
      { 
        name: 'password', 
        type: 'string', 
        title: 'Password' 
      },
      { 
        name: 'phone', 
        type: 'string', 
        title: 'Phone Number' 
      },
      { 
        name: 'address', 
        type: 'text', 
        title: 'Address' 
      },
      { 
        name: 'createdAt', 
        type: 'datetime', 
        title: 'Account Created At' 
      }
    ]
  };
  