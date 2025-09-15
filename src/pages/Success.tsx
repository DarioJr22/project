import React from 'react';
import { CheckCircle, Download, Mail, ArrowLeft } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Pagamento Confirmado! 🎉
          </h1>
          <p className="text-xl text-gray-700">
            Obrigado pela sua compra. Seu Manual da Fertilidade está a caminho!
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold text-green-800">
              Verifique seu e-mail
            </h2>
          </div>
          <p className="text-green-700 mb-4">
            Enviamos o link de download do seu e-book para o e-mail cadastrado no pagamento.
          </p>
          <div className="bg-white border border-green-300 rounded p-4">
            <p className="text-sm text-gray-700">
              <strong>Não encontrou o e-mail?</strong><br/>
              • Verifique a pasta de spam/lixo eletrônico<br/>
              • Aguarde alguns minutos (pode demorar até 10 minutos)<br/>
              • Entre em contato conosco se não receber
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-gray-700">
            <Download className="h-5 w-5 text-green-600" />
            <span>Download disponível por tempo ilimitado</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Garantia de 7 dias - 100% do dinheiro de volta</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 mb-4">
            Precisa de ajuda? Entre em contato conosco:
          </p>
          <a 
            href="mailto:suporte@manualdafertilidade.com" 
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            suporte@manualdafertilidade.com
          </a>
        </div>

        <div className="mt-8">
          <a 
            href="/"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao início</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;