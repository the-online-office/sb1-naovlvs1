import React from 'react';
import { ProductCard } from './ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Professional Wireless Mouse",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600"
  },
  {
    id: 2,
    title: "Mechanical Gaming Keyboard",
    price: 89.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600"
  },
  {
    id: 3,
    title: "4K Gaming Monitor",
    price: 299.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600"
  },
  {
    id: 4,
    title: "RGB Gaming Headset",
    price: 79.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600"
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {SAMPLE_PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
}