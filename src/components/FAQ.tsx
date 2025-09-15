import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Substitui consulta médica?",
      answer: "Não. É material educativo para apoiar sua jornada."
    },
    {
      question: "Serve para homens e mulheres?",
      answer: "Sim, há orientações úteis para ambos."
    },
    {
      question: "Fala sobre alimentação e estilo de vida?",
      answer: "Sim, incluindo resistência à insulina."
    },
    {
      question: "Menciona medicamentos/suplementos?",
      answer: "Sim, em caráter informativo (clomifeno, cabergolina, tribulus, maca etc.)."
    },
    {
      question: "Como recebo?",
      answer: "Após o pagamento no Stripe, envio imediato por e-mail (digital)."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openFAQ === index}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;