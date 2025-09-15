import React from 'react';
import { Brain, Apple, Activity, Pill, Heart, AlertTriangle } from 'lucide-react';

const BookContents: React.FC = () => {
  const contents = [
    {
      icon: Brain,
      title: "Cortisol & estresse",
      description: "Efeitos sobre equilíbrio hormonal, inflamação e metabolismo; práticas de manejo do estresse"
    },
    {
      icon: Apple,
      title: "Mudanças na alimentação",
      description: "Relação com resistência à insulina; explicação sobre metformina/Glifage XR como contexto educativo"
    },
    {
      icon: Activity,
      title: "Hormônios femininos",
      description: "Visão sobre progesterona baixa e prolactina alta"
    },
    {
      icon: Pill,
      title: "Recursos discutidos (educativo)",
      description: "Clomifeno, tamoxifeno, cabergolina, HCG, além de suplementos como tribulus, maca peruana, marapuama e long jack — para conversa responsável com o profissional"
    },
    {
      icon: Heart,
      title: "Tópico masculino extra",
      description: "Tadalafil e sua relação indireta com a concepção (função sexual)"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dentro do e-book: do básico ao avançado, sem rodeios
          </h2>
        </div>

        <div className="grid gap-6">
          {contents.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>Nota de segurança:</strong> Conteúdo educativo. Não substitui avaliação individualizada. Consulte seu médico antes de qualquer decisão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookContents;