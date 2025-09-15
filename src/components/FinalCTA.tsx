import React from 'react';
import { ArrowRight, Download, Lock, Shield } from 'lucide-react';
import CTAButton from './CTAButton';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Transforme expectativa em plano
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          Comece hoje com um roteiro claro, tire dúvidas com seu médico e dê passos consistentes rumo ao seu sonho.
        </p>

        <div className="mb-8">
          <CTAButton 
            href="[URL_STRIPE_CHECKOUT]" 
            className="bg-white text-blue-700 hover:bg-gray-100 text-xl px-8 py-4 inline-flex items-center space-x-2 font-semibold"
            size="large"
          >
            <span>Comprar agora – R$[PREÇO]</span>
            <ArrowRight className="h-5 w-5" />
          </CTAButton>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm opacity-90">
          <div className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download imediato</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-4 w-4" />
            <span>Pagamento seguro via Stripe</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Suporte em até 24h úteis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;