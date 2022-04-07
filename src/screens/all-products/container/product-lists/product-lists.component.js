import { SubHeading } from '../../../../components/primitives/text/text.component';
import ProductCard from '../../../../components/product-card/product-card.component';
import { useFilter } from '../../../../hooks/useFilter';
import { useProducts } from '../../../../hooks/useProducts';
import { categoryFilter, newArrivalsFunc, PriceFilter, sortProduct } from '../../../../utils';
import productList from './product-lists.component.module.css';
export const ProductLists = () => {
  const { products, isLoading } = useProducts();

  // from filter

  // const { products, isLoading } = useFilter();

  const {
    state: { sortBy, category, price, isTrending, newArrival },
  } = useFilter();

  const productsListFinal = sortProduct(
    PriceFilter(newArrivalsFunc(categoryFilter([...products], category), newArrival), price),
    sortBy
  );

  return (
    <>
      <SubHeading label={`All products- (${productsListFinal.length}) `} />
      <section className={productList.products_container}>
        {isLoading && <SubHeading label='Loading' />}
        {productsListFinal.map((item) => {
          return <ProductCard key={item._id} products={item} />;
        })}
      </section>
    </>
  );
};
