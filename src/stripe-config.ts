export const stripeProducts = {
  'manual-fertilidade': {
    priceId: 'price_1QVyourstripepriceID', // Replace with your actual Stripe price ID
    name: 'Manual da Fertilidade (E-BOOK)',
    description: 'Um guia rico em informações que podem te ajudar aumentar significativamente a sua fertilidade',
    price: 30.00,
    currency: 'BRL',
    mode: 'payment' as const
  }
} as const;

export type ProductKey = keyof typeof stripeProducts;