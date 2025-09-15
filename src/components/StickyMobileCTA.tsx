import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 lg:hidden shadow-lg">
      <CTAButton 
        href="[URL_STRIPE_CHECKOUT]" 
        className="w-full text-center justify-center"
        size="medium"
      >
        Comprar – R$[PREÇO]
      </CTAButton>
      <p className="text-xs text-gray-600 text-center mt-2">
        Pagamento seguro • Acesso imediato
      </p>
    </div>
  );
};

export default StickyMobileCTA;