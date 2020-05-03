const profile = {
  firstName: 'Joe',
  lastName: 'Montana',
  limit: 850.0
};

const products = [
  {
    img: 'https://i.imgur.com/TTBZnDi.jpg',
    id: 1,
    title: 'iPad 4 Mini',
    price: 500.01,
    inventory: 2,
    shipping: 15.0
  },
  {
    img: 'https://i.imgur.com/dGnawoA.jpg',
    id: 2,
    title: 'H&M T-Shirt White',
    price: 10.99,
    inventory: 10,
    shipping: 5.0
  },
  {
    img: 'https://i.imgur.com/eWXNC7Y.jpg',
    id: 3,
    title: 'Android one',
    price: 19.99,
    inventory: 3,
    shipping: 22.5
  },
  {
    img: 'https://i.imgur.com/C2y7R2V.jpg',
    id: 4,
    title: 'Canon DSLR',
    price: 834.99,
    inventory: 5,
    shipping: 9.0
  },
  {
    img: 'https://i.imgur.com/xoZhhfU.jpg',
    id: 5,
    title: 'MacBook Pro',
    price: 487.0,
    inventory: 1,
    shipping: 35.0
  },
  {
    img: 'https://i.imgur.com/BSddd5y.jpg',
    id: 6,
    title: 'Silver Headphones',
    price: 959.59,
    inventory: 6,
    shipping: 11.0
  }
];

const promotions = [
  { id: 1, title: '30% OFF' },
  { id: 2, title: '$100.00 Discount' },
  { id: 3, title: 'Free Shipping' },
  { id: 4, title: '+ $100.00 on limit' }
];

export default {
  getProfile(cb) {
    setTimeout(() => cb(profile), 200);
  },

  getProducts(cb) {
    setTimeout(() => cb(products), 200);
  },

  getPromotions(cb) {
    setTimeout(() => cb(promotions), 200);
  }
};
