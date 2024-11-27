import React from 'react';
import { useStore } from '../store/useStore';

export function Profile() {
  const { isLoggedIn } = useStore();

  if (!isLoggedIn) {
    return (
      <div className="pt-28 pb-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">Please log in to view your profile</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        {/* Profile content will go here */}
      </div>
    </div>
  );
}