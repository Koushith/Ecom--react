import ProductCard from '../../../../components/product-card/product-card.component';
import { useProducts } from '../../../../hooks/useProducts';
import trending from './trending-section.component.module.css';

export const TrendingSection = () => {
  const { products } = useProducts();

  const trendingProducts = products.filter((item) => item.isTrending);
  return (
    <section className={trending.trending_container}>
      <h2 className={trending.heading}>
        <span className={trending.underline}></span>Tending Styles{' '}
      </h2>
      <div className={trending.product_grid}>
        {trendingProducts.map((item) => (
          <ProductCard buttonLabel='ADD TO CART' products={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};
