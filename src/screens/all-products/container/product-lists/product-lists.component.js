import { SubHeading } from '../../../../components/primitives/text/text.component';
import ProductCard from '../../../../components/product-card/product-card.component';
import { useCart } from '../../../../hooks/useCart';
import { useFilter } from '../../../../hooks/useFilter';
import { useProducts } from '../../../../hooks/useProducts';
import productList from './product-lists.component.module.css';
export const ProductLists = () => {
  const { products, isLoading } = useProducts();

  // from filter

  // const { products, isLoading } = useFilter();

  return (
    <>
      <SubHeading label={`All products- (${products.length}) `} />
      <section className={productList.products_container}>
        {isLoading && <SubHeading label='loading....' />}
        {products?.map((item) => (
          <ProductCard products={item} />
        ))}
      </section>
    </>
  );
};
