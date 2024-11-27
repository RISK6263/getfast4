import React from 'react';
import { Plus, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addToCart } = useStore();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {price > 20 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -20% Noël
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-red-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
        <div className="flex items-center justify-between mt-4">
          <div>
            {price > 20 ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-600">{(price * 0.8).toFixed(2)}€</span>
                <span className="text-sm line-through text-gray-400">{price.toFixed(2)}€</span>
              </div>
            ) : (
              <span className="text-lg font-bold">{price.toFixed(2)}€</span>
            )}
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(id)}
            className="bg-gradient-to-r from-red-600 to-green-600 text-white p-2 rounded-full hover:from-red-700 hover:to-green-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}