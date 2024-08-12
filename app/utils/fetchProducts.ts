
import { Product } from '../types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${baseUrl}/products`);
  const products = await response.json();
  return products;
};
