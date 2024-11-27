import React from 'react';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function PromoBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-red-600 to-green-700 text-white py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/catalog?promo=NOEL2023">
          <motion.div 
            className="flex items-center justify-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Gift className="h-6 w-6 animate-bounce" />
            <p className="text-lg font-medium">
              🎄 Offres Spéciales Noël: Livraison gratuite dès 50$! Cliquez ici et utilisez le code: NOEL2023 🎅
            </p>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}