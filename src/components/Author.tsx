import React from 'react';
import { User } from 'lucide-react';

const Author: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <User className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quem escreveu
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Este manual foi escrito por <strong>Rodrigo Zangriane</strong>, reunindo, em linguagem simples, caminhos práticos para quem deseja entender e cuidar melhor da fertilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Author;