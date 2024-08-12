// pages/index.tsx

import ProductCard from './component/product/ProductCard';
import { fetchProducts } from './utils/fetchProducts';
import ProductSlider from './component/product/ProductSlider';
import { Product } from './types';
import { images } from './data/mockData';
import HeroSection from './component/Hero';


const Home = async () => {
  const products: Product[] = await fetchProducts();

  const sliderProducts = products.slice(0, images.length).map((product, index) => ({
    ...product,
    image: images[index],
  }));

  const gridProducts = products.map((product, index) => ({
    ...product,
    image: images[index % images.length], 
  }));


  console.log('Slider Products:', sliderProducts);
  console.log('Grid Products:', gridProducts);

  
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
        <ProductSlider products={sliderProducts} />
        
        <h2 className="text-2xl font-bold mt-8 mb-4">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gridProducts.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

