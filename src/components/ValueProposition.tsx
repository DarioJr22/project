import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const ValueProposition: React.FC = () => {
  const benefits = [
    "Traduz ciência do dia a dia em passos práticos para o casal",
    "Explica a influência do cortisol/estresse e como manejar hábitos para um ambiente mais favorável",
    "Mostra como mudanças na alimentação e rotina podem impactar a fertilidade",
    "Esclarece hormônios-chave (progesterona e prolactina) de forma acessível",
    "Cita, em caráter educativo, recursos e suplementos para discussão com profissionais"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que este manual é diferente
          </h2>
        </div>

        <div className="grid gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-800 text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton href="[URL_STRIPE_CHECKOUT]" className="inline-flex items-center space-x-2">
            <span>Quero começar agora</span>
            <ArrowRight className="h-5 w-5" />
          </CTAButton>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            <strong>Conteúdo educativo.</strong> Consulte seu médico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;