import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import CTAButton from './CTAButton';

interface Objection {
  question: string;
  answer: string;
  ctaText: string;
}

const ObjectionsResponses: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 1, 2]));

  const objections: Objection[] = [
    {
      question: "Tenho medo de promessas. Cada corpo é diferente.",
      answer: "Você está certo(a). Este é um material educativo, não substitui consulta e não faz promessas. Ele organiza o que está sob seu controle — hábitos, perguntas para o médico e próximos passos.",
      ctaText: "Comprar agora – R$[PREÇO]"
    },
    {
      question: "Já tem muita informação grátis por aí. Por que pagar?",
      answer: "Aqui você ganha curadoria + passo a passo: roteiro direto, checklists e aplicação imediata.",
      ctaText: "Quero o roteiro pronto →"
    },
    {
      question: "É só para mulheres? E os homens?",
      answer: "É para o casal; há seções específicas para homens e pontos compartilháveis.",
      ctaText: "Ver para quem é →"
    },
    {
      question: "Tenho SOP/endometriose. Isso serve para mim?",
      answer: "Serve como base de organização para levar perguntas qualificadas ao seu médico.",
      ctaText: "Quero me preparar melhor →"
    },
    {
      question: "Já estou em tratamento (induções, FIV). Ainda assim ajuda?",
      answer: "Sim. Complementa com hábitos e entendimento que melhoram a adesão e a conversa clínica.",
      ctaText: "Usar junto do meu tratamento →"
    },
    {
      question: "Tenho mais de 35/40. Ainda vale a pena?",
      answer: "Idade importa, mas você pode otimizar o que controla (rotina, estresse, alimentação).",
      ctaText: "Quero otimizar o agora →"
    },
    {
      question: "Fala de medicamentos/suplementos? Tenho receio.",
      answer: "O conteúdo é informativo (nomes/objetivos/pontos de atenção) para conversar com o médico.",
      ctaText: "Entender antes de decidir →"
    },
    {
      question: "Não tenho tempo para estudar.",
      answer: "Capítulos curtos, resumos de 15 min e checklists com 'próximo passo'.",
      ctaText: "Começar pelo resumo →"
    },
    {
      question: "Não quero dieta restritiva.",
      answer: "Foco em trocas sustentáveis, não extremos; contexto sobre resistência à insulina.",
      ctaText: "Ver exemplos práticos →"
    },
    {
      question: "Meu parceiro não se envolve.",
      answer: "Checklists compartilháveis + mini-guia para engajar o parceiro.",
      ctaText: "Baixar checklist do casal →"
    },
    {
      question: "Não entendo linguagem técnica.",
      answer: "Linguagem simples, com glossário e exemplos do dia a dia.",
      ctaText: "Quero aprender sem complicar →"
    },
    {
      question: "E se eu comprar e não gostar?",
      answer: "Garantia incondicional de 7 dias.",
      ctaText: "Comprar com garantia →"
    },
    {
      question: "É caro.",
      answer: "Custa menos que uma consulta/exame e economiza tempo com informação dispersa.",
      ctaText: "Quero economizar tempo →"
    },
    {
      question: "Como recebo? É na hora?",
      answer: "Sim — download imediato por e-mail (PDF).",
      ctaText: "Receber agora →"
    },
    {
      question: "Meus dados ficam seguros?",
      answer: "Pagamento via Stripe (padrão internacional). Não armazenamos dados do cartão.",
      ctaText: "Comprar com segurança →"
    },
    {
      question: "Moro fora do Brasil. Consigo comprar?",
      answer: "Sim, o Stripe aceita cartões internacionais; entrega é digital.",
      ctaText: "Comprar de qualquer lugar →"
    },
    {
      question: "Funciona mesmo?",
      answer: "O que 'funciona' é um conjunto: hábitos consistentes + orientação médica; o manual encurta seu caminho e evita erros comuns.",
      ctaText: "Quero clareza agora →"
    },
    {
      question: "Quero falar com alguém antes.",
      answer: "Suporte sobre o e-book e a compra por e-mail (não é suporte médico).",
      ctaText: "Falar com suporte →"
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const shouldShowCTA = (index: number) => {
    return (index + 1) % 6 === 0 || index === objections.length - 1;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Objeções & Respostas
          </h2>
          <p className="text-lg text-gray-600">
            Tire todas as suas dúvidas antes de decidir
          </p>
        </div>

        <div className="space-y-4">
          {objections.map((objection, index) => (
            <div key={index}>
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
                  aria-expanded={openItems.has(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{objection.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 mb-4 leading-relaxed">{objection.answer}</p>
                    <CTAButton 
                      href={index === objections.length - 1 ? "mailto:[SEU_EMAIL]" : "[URL_STRIPE_CHECKOUT]"}
                      size="small"
                      className="text-sm"
                    >
                      {objection.ctaText}
                    </CTAButton>
                  </div>
                )}
              </div>

              {shouldShowCTA(index) && (
                <div className="my-8 text-center">
                  <CTAButton href="[URL_STRIPE_CHECKOUT]" size="large" className="mb-4">
                    Comprar agora – R$[PREÇO]
                  </CTAButton>
                  <p className="text-sm text-gray-600">
                    Pagamento 100% seguro via Stripe. Acesso imediato.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <em>Informações para fins educacionais. Consulte seu médico para avaliação individualizada.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsResponses;