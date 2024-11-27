import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout, cart } = useStore();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">GetFast</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/supermarkets" className="text-gray-600 hover:text-emerald-600">
              Supermarchés
            </Link>
            <Link to="/catalog" className="text-gray-600 hover:text-emerald-600">
              Catalogue
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-emerald-600 flex items-center gap-1">
              <ShoppingCart className="h-5 w-5" />
              <span>Panier ({cart.length})</span>
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-emerald-600 flex items-center gap-1">
              <User className="h-5 w-5" />
              <span>Profil</span>
            </Link>
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="flex items-center gap-1 text-gray-600 hover:text-emerald-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Déconnexion</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              >
                Connexion
              </Link>
            )}
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/supermarkets" className="text-gray-600 hover:text-emerald-600">
                Supermarchés
              </Link>
              <Link to="/catalog" className="text-gray-600 hover:text-emerald-600">
                Catalogue
              </Link>
              <Link to="/cart" className="text-gray-600 hover:text-emerald-600">
                Panier ({cart.length})
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-emerald-600">
                Profil
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-emerald-600 text-left"
                >
                  Déconnexion
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 inline-block"
                >
                  Connexion
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}