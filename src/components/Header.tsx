import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-40 border-b border-green-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Manual da Fertilidade</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;