import React from 'react';
import { ArrowRight, Clock, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-emerald-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vos courses livrées en <span className="text-emerald-600">quelques minutes</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Faites vos courses en ligne et recevez vos produits frais directement chez vous. Livraison rapide et fiable dans Kinshasa.
            </p>
            <Link to="/supermarkets">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-700 transition-colors">
                Commander maintenant <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
              alt="Produits frais"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Livraison Rapide</h3>
            <p className="text-gray-600">Recevez vos courses en quelques heures</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Truck className="h-8 w-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Livraison Gratuite</h3>
            <p className="text-gray-600">Pour les commandes de plus de 50$</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Paiement Sécurisé</h3>
            <p className="text-gray-600">Moyens de paiement 100% sécurisés</p>
          </div>
        </div>
      </div>
    </div>
  );
}