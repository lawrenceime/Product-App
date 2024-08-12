// components/ProductCard.tsx
import { FC } from 'react';
import Image from 'next/image';
import { ProductCardProps } from '../types';
import { images } from '../data/mockData';






const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <Image className="w-full" src={product.image.url} alt={product.name} width={100} height={100}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-900 font-bold">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
