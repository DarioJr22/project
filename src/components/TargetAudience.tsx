import React from 'react';
import { Users, UserX } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Para quem é</h3>
            </div>
            <p className="text-green-800 leading-relaxed">
              Casais tentando engravidar que desejam organizar hábitos, entender fatores hormonais e levar perguntas mais qualificadas ao consultório (conteúdo para <strong>ambos os sexos</strong>).
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-lg border border-red-200">
            <div className="flex items-center space-x-3 mb-6">
              <UserX className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-800">Para quem não é</h3>
            </div>
            <p className="text-red-800 leading-relaxed">
              Quem busca diagnóstico, prescrição ou garantias de resultado — isso cabe ao seu médico.
            </p>
            <div className="mt-4 p-3 bg-red-100 rounded border border-red-300">
              <p className="text-sm text-red-700">
                <em>Conteúdo educativo. Consulte seu médico.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;