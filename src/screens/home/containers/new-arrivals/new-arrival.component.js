import ProductCard from '../../../../components/product-card/product-card.component';
import newArrival from './new-arrival.component.module.css';

export const NewArrival = () => {
  return (
    <section className={newArrival.arrival_container}>
      <h2 className={newArrival.heading}>
        <span className={newArrival.underline}></span>New Arrivals{' '}
      </h2>
      <div className={newArrival.product_grid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};
