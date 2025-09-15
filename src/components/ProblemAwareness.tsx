import React from 'react';
import { AlertTriangle, Heart, Clock, TrendingDown } from 'lucide-react';

const ProblemAwareness: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tempo está passando",
      description: "Cada mês que passa sem engravidar aumenta a ansiedade e a pressão emocional do casal."
    },
    {
      icon: TrendingDown,
      title: "Fertilidade em declínio",
      description: "Fatores como estresse, alimentação inadequada e estilo de vida moderno afetam a fertilidade."
    },
    {
      icon: AlertTriangle,
      title: "Informações conflitantes",
      description: "Internet cheia de mitos e informações desencontradas sobre fertilidade e concepção."
    },
    {
      icon: Heart,
      title: "Impacto emocional",
      description: "A dificuldade para engravidar afeta o relacionamento e a saúde mental do casal."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Você não está sozinha nessa jornada
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Milhares de casais enfrentam os mesmos desafios. Reconhecer o problema é o primeiro passo para a solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-800">
              <strong>A boa notícia:</strong> Existem estratégias naturais e baseadas em ciência que podem aumentar significativamente suas chances de engravidar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAwareness;