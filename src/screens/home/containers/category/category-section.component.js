import { CategoryCard } from '../../../../components';
import ProductCard from '../../../../components/product-card/product-card.component';
import { useProducts } from '../../../../hooks/useProducts';
import trending from './category-section.component.module.css';

export const Category = () => {
  const { category } = useProducts();

  return (
    <section className={trending.trending_container}>
      <h2 className={trending.heading}>
        <span className={trending.underline}></span>Categories{' '}
      </h2>
      <div className={trending.product_grid}>
        {category.map((item) => (
          <CategoryCard category={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};
