import React from 'react';
import { Shield, Clock } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Teste sem risco por 7 dias
          </h2>
          <p className="text-lg text-green-800 mb-4 max-w-2xl mx-auto">
            Se o conteúdo não ajudar você a dar passos claros, devolvemos 100% do valor.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-green-700">
            <Clock className="h-4 w-4" />
            <span>Garantia incondicional para compras online</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;