import React, { useEffect, useState } from 'react';
import { Shield, Download, Lock } from 'lucide-react';
import CTAButton from './CTAButton';
import { stripeProducts } from '../stripe-config';

const Hero: React.FC = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const headlines = [
    "Descubra os segredos da fertilidade que 90% dos casais não conhecem",
    "Transforme sua jornada para engravidar com estratégias comprovadas",
    "O guia completo que já ajudou mais de 1.000 casais a realizarem o sonho da maternidade"
  ];

  // Auto-rotate headlines every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  const product = stripeProducts['manual-fertilidade'];

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cover bg-center rounded-full" 
             style={{backgroundImage: 'url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400)'}}></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-cover bg-center rounded-full" 
             style={{backgroundImage: 'url(https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400)'}}></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-cover bg-center rounded-full" 
             style={{backgroundImage: 'url(https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=400)'}}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-cover bg-center rounded-full" 
             style={{backgroundImage: 'url(https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=400)'}}></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Headline Indicators */}
        <div className="mb-8 flex justify-center space-x-2">
          {headlines.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentHeadline === index 
                  ? 'bg-green-600 w-8' 
                  : 'bg-green-300'
              }`}
            />
          ))}
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight min-h-[120px] flex items-center justify-center transition-all duration-500">
          {headlines[currentHeadline]}
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          <strong>GRÁTIS:</strong> Baixe nosso guia exclusivo com as 7 estratégias naturais que aumentam a fertilidade em até 40%. Mais de 10.000 downloads!
        </p>

        <div className="mb-8">
          <CTAButton 
            href="#lead-form" 
            className="text-xl px-8 py-4"
            size="large"
          >
            Baixar Guia Gratuito Agora
          </CTAButton>
          <p className="text-sm text-gray-600 mt-3">
            100% gratuito. Sem spam. Cancele quando quiser.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download instantâneo</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-4 w-4" />
            <span>Dados protegidos</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Mais de 10.000 downloads</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;