import ProductCard from '../../../../components/product-card/product-card.component';
import trending from './trending-section.component.module.css';
export const TrendingSection = () => {
  return (
    <section className={trending.trending_container}>
      <h2 className={trending.heading}>
        <span className={trending.underline}></span>Tending Styles{' '}
      </h2>
      <div className={trending.product_grid}>
        <ProductCard buttonLabel='ADD TO CART' />
        <ProductCard buttonLabel='ADD TO CART' />
        <ProductCard buttonLabel='ADD TO CART' />
        <ProductCard buttonLabel='ADD TO CART' />
        <ProductCard buttonLabel='ADD TO CART' />
        <ProductCard buttonLabel='ADD TO CART' />
        <ProductCard buttonLabel='ADD TO CART' />
        <ProductCard buttonLabel='ADD TO CART' />
      </div>
    </section>
  );
};
