// components/ProductCard.tsx
import React from 'react';
import { ProductCardProps } from '../types';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image.url} alt={product.name} />
      <div className="px-6 py-4">
        <div className="product-title">{product.name}</div>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="product-price">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
