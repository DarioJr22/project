import React from 'react';
import { Leaf, AlertTriangle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6 text-green-400" />
            <span className="text-xl font-bold">Manual da Fertilidade</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">Informações</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Suporte</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="mailto:[SEU_EMAIL]" className="hover:text-white transition-colors">E-mail de Suporte</a></li>
              <li>Resposta em até 24h úteis</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Segurança</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Pagamento via Stripe</li>
              <li>Dados protegidos</li>
              <li>Garantia de 7 dias</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-100">
                  <strong>Aviso Médico:</strong> Informações para fins educacionais. Não constituem aconselhamento médico. Procure seu médico.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 Manual da Fertilidade. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;