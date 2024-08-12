// pages/index.tsx
import { GetServerSideProps } from 'next';
import ProductCard from './component/ProductCard';
import { fetchProducts } from './utils/fetchProducts';
import { Product } from './types';
import { images } from './data/mockData';
import HeroSection from './component/Hero';


const Home = async () => {
  const products: Product[] = await fetchProducts();

  const productsWithImages = products.slice(0,  images.length).map((product , index)=> (
    {...product , image:images[index]}
  ))

  return (
    <div>
      <HeroSection/>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsWithImages.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;

