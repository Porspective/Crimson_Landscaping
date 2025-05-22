export const products = {
  lawnmowing: {
    id: 'prod_SMLFAG6ANcRNtW',
    priceId: 'price_1RRcYwEHi6GXcPNQxXfbp0Kl',
    name: 'Lawn Mowing Service',
    description: 'Professional lawn mowing service for your property',
    mode: 'payment' as const,
  },
} as const;

export type ProductId = keyof typeof products;