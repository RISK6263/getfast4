import React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    name: "Fresh Organic Bananas",
    price: 2.99,
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Whole Grain Bread",
    price: 3.49,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Fresh Milk",
    price: 4.99,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Organic Eggs",
    price: 5.99,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80"
  }
];

export function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}