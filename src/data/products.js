// Dummy product data for the e-commerce app
export const products = [
  {
    id: 1,
    name: "Modern Minimal Chair",
    category: "furniture",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A sleek and comfortable modern chair with a minimalist design. Perfect for any contemporary living space.",
    features: ["Ergonomic design", "Stain-resistant fabric", "Easy assembly", "Durable construction"],
    colors: ["White", "Black", "Gray", "Beige"],
    stock: 12,
    rating: 4.5,
    reviews: 28
  },
  {
    id: 2,
    name: "Premium Wireless Headphones",
    category: "electronics",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality for an immersive listening experience.",
    features: ["Active noise cancellation", "40-hour battery life", "Premium sound quality", "Comfortable ear cushions"],
    colors: ["Black", "Silver", "Blue"],
    stock: 8,
    rating: 4.8,
    reviews: 42
  },
  {
    id: 3,
    name: "Slim Fit Casual Shirt",
    category: "clothing",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A comfortable and stylish slim-fit casual shirt made from high-quality cotton for everyday wear.",
    features: ["100% cotton", "Breathable fabric", "Easy care", "Modern fit"],
    colors: ["Blue", "White", "Black", "Gray", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 25,
    rating: 4.2,
    reviews: 15
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    category: "electronics",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A high-performance DSLR camera for professional photography with advanced features and exceptional image quality.",
    features: ["24.1 megapixel sensor", "4K video recording", "Advanced autofocus", "Weather-sealed body"],
    colors: ["Black"],
    stock: 5,
    rating: 4.9,
    reviews: 36
  },
  {
    id: 5,
    name: "Handcrafted Leather Wallet",
    category: "accessories",
    price: 79.99,
    image: "https://i.pinimg.com/736x/01/a7/0a/01a70a87ae0420bf744e070639c9920f.jpg",
    description: "A premium handcrafted leather wallet with multiple card slots and compartments for organized storage.",
    features: ["Genuine leather", "RFID blocking", "Multiple card slots", "Slim design"],
    colors: ["Brown", "Black", "Tan"],
    stock: 15,
    rating: 4.7,
    reviews: 22
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    category: "electronics",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "A versatile fitness tracker with heart rate monitoring, GPS, and smart notifications to help you achieve your fitness goals.",
    features: ["Heart rate monitoring", "GPS tracking", "Water resistant", "7-day battery life"],
    colors: ["Black", "Silver", "Rose Gold"],
    stock: 10,
    rating: 4.6,
    reviews: 31
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug Set",
    category: "home",
    price: 39.99,
    image: "https://ii1.pepperfry.com/media/catalog/product/c/e/494x544/ceramic-coffee-mug-set--set-of-2--300ml--teal-green---medium-mug---glossy-finish---stoneware-coffee--xr81ah.jpg",
    description: "A set of 4 elegant ceramic coffee mugs with a modern design, perfect for enjoying your favorite hot beverages.",
    features: ["Ceramic material", "12 oz capacity", "Microwave safe", "Dishwasher safe"],
    colors: ["White", "Black", "Assorted"],
    stock: 20,
    rating: 4.4,
    reviews: 18
  },
  {
    id: 8,
    name: "Organic Cotton Throw Blanket",
    category: "home",
    price: 69.99,
    image: "https://5.imimg.com/data5/SELLER/PDFImage/2023/8/336329461/GX/IX/QU/194470932/pchb01-1-500x500.png",
    description: "A soft and cozy throw blanket made from 100% organic cotton, perfect for adding warmth and style to your living space.",
    features: ["100% organic cotton", "Hypoallergenic", "Machine washable", "Handcrafted"],
    colors: ["Gray", "Beige", "Blue", "Green"],
    stock: 18,
    rating: 4.3,
    reviews: 14
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'home', name: 'Home & Kitchen' }
];