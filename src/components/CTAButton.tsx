import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  href, 
  children, 
  className = '', 
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    bg-green-600 hover:bg-green-700 
    text-white font-semibold
    rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    hover:shadow-lg hover:scale-105
    active:scale-95
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
      aria-label="Comprar agora com pagamento seguro via Stripe"
    >
      {children}
    </a>
  );
};

export default CTAButton;