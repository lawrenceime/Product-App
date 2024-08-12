// types.ts
export interface Product {
    product_id: string;
    name: string;
    description: string;
    price: number;
    image: Image;
  }
  
  export interface ProductCardProps {
    product: Product;
  }

  export type Image = {
    url :string;
    alt?: string;
    width?: number;
    height?: number;
  }
  
    export type ImageArray = Image[]
  