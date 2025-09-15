import React, { useState } from 'react';
import { Mail, User, ArrowRight, CheckCircle } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <CheckCircle className="h-16 w-16 text-green-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Parabéns! 🎉</h2>
            <p className="text-xl mb-6">
              Seu guia gratuito foi enviado para seu e-mail. Verifique sua caixa de entrada (e spam também).
            </p>
            <div className="bg-green-500 text-white p-4 rounded-lg mb-6">
              <p className="font-semibold">🎁 BÔNUS ESPECIAL:</p>
              <p>Você também recebeu acesso ao nosso Manual Completo da Fertilidade por apenas R$ 30,00 (desconto de 70%)!</p>
            </div>
            <button 
              onClick={() => window.location.href = '#upgrade-offer'}
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
            >
              Ver Oferta Especial →
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Baixe Seu Guia Gratuito Agora
          </h2>
          <p className="text-xl opacity-95">
            Preencha os dados abaixo e receba imediatamente em seu e-mail
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Seu nome completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="Digite seu nome"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Seu melhor e-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                WhatsApp (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="(11) 99999-9999"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <span>Quero Meu Guia Gratuito</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>

            <p className="text-sm text-center opacity-80">
              🔒 Seus dados estão seguros. Não enviamos spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;