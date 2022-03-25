import ProductCard from '../../../../components/product-card/product-card.component';
import productList from './product-lists.component.module.css';
export const ProductLists = () => {
  return (
    <section className={productList.products_container}>
      <ProductCard buttonLabel='ADD TO CART' />
      <ProductCard buttonLabel='ADD TO CART' /> <ProductCard buttonLabel='ADD TO CART' />{' '}
      <ProductCard buttonLabel='ADD TO CART' /> <ProductCard buttonLabel='ADD TO CART' />{' '}
      <ProductCard buttonLabel='ADD TO CART' /> <ProductCard buttonLabel='ADD TO CART' />{' '}
      <ProductCard buttonLabel='ADD TO CART' /> <ProductCard buttonLabel='ADD TO CART' />{' '}
      <ProductCard buttonLabel='ADD TO CART' />
    </section>
  );
};
