import React from 'react';
import { Star, Clock, Shield, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';
import { stripeProducts } from '../stripe-config';


const UpgradeOffer: React.FC = () => {
  const product = stripeProducts['manual-fertilidade'];

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          price_id: product.priceId,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/#upgrade-offer`,
          mode: product.mode,
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Erro ao processar pagamento. Tente novamente.');
    }
  };

  return (
    <section id="upgrade-offer" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4" />
            <span>OFERTA ESPECIAL - 70% OFF</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quer ir além do básico?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Aproveite esta oferta exclusiva e tenha acesso ao Manual Completo da Fertilidade com estratégias avançadas e protocolos detalhados.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            70% OFF
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Manual Completo da Fertilidade
              </h3>
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Protocolos detalhados para homens e mulheres</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Estratégias nutricionais específicas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Suplementação baseada em evidências</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Checklists e planilhas práticas</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 line-through">R$ 100,00</div>
                  <div className="text-sm text-gray-600">Preço normal</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">R$ {product.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">Apenas hoje</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all duration-200 hover:scale-105 mb-4 flex items-center justify-center space-x-2"
              >
                <span>Comprar Agora - R$ {product.price.toFixed(2)}</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Acesso imediato</span>
                </div>
              </div>

              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Garantia de 7 dias:</strong> Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-red-600 font-semibold">
            <Clock className="h-5 w-5" />
            <span>Oferta válida apenas para os próximos visitantes desta página</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeOffer;