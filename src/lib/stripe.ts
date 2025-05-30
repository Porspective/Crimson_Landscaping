import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the publishable key
export const stripePromise = loadStripe('pk_test_51RMaAqEHi6GXcPNQeVRVjPZj2J302V7CFhMZaLIp8vR2DXMPs0bSxWmXS8WWKpCpKnOuK75w25yBBhPQgHtGLRv400ajCfAG4O');