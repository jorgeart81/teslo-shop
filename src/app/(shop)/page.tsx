import { Title } from '@/components/ui';
import { initialData } from '@/seed/seed';
import { ProductGrid } from '@/components/products';

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title='Tienda' subtitle='Todos los productos' />
      <ProductGrid products={products} />
    </>
  );
}
