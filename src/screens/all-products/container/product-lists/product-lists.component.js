import { SubHeading } from '../../../../components/primitives/text/text.component';
import ProductCard from '../../../../components/product-card/product-card.component';
import { useProducts } from '../../../../hooks/useProducts';
import productList from './product-lists.component.module.css';
export const ProductLists = () => {
  const { products } = useProducts();

  return (
    <>
      <SubHeading label={`All products- (${products.length}) `} />
      <section className={productList.products_container}>
        {products?.map((item) => (
          <ProductCard buttonLabel='ADD TO CART' products={item} />
        ))}
      </section>
    </>
  );
};
