import React from 'react';
import { Star, Users, Download, Heart } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 32,
      text: "Depois de 2 anos tentando, aplicamos as estratégias do guia e engravidei em 4 meses! Recomendo para todas as amigas.",
      rating: 5
    },
    {
      name: "João e Ana",
      age: 35,
      text: "O manual nos ajudou a entender melhor nossos corpos e otimizar nossa saúde. Hoje temos nossa pequena Sophia!",
      rating: 5
    },
    {
      name: "Carla Mendes",
      age: 29,
      text: "Informações claras e práticas. Mudei minha alimentação seguindo as dicas e os resultados apareceram rapidamente.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10.000+",
      label: "Casais ajudados"
    },
    {
      icon: Download,
      number: "50.000+",
      label: "Downloads do guia"
    },
    {
      icon: Heart,
      number: "85%",
      label: "Taxa de sucesso"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Avaliação média"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mais de 10.000 casais já transformaram suas vidas
          </h2>
          <p className="text-xl text-gray-700">
            Veja o que nossos leitores estão dizendo
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="font-semibold text-gray-900">
                {testimonial.name}, {testimonial.age} anos
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-green-800">
              <strong>Junte-se a milhares de casais</strong> que já estão aplicando essas estratégias comprovadas para aumentar suas chances de engravidar naturalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;