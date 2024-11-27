import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { supermarkets } from '../data/supermarkets';

export function SupermarketSelection() {
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-12 min-h-screen bg-gradient-to-b from-red-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Choisissez votre supermarché</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supermarkets.map((supermarket) => (
            <motion.div
              key={supermarket.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => navigate(`/catalog?supermarket=${supermarket.id}`)}
            >
              <img
                src={supermarket.image}
                alt={supermarket.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{supermarket.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{supermarket.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Temps de livraison: {supermarket.deliveryTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}