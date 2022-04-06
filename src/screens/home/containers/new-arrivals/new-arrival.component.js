import ProductCard from '../../../../components/product-card/product-card.component';
import { useProducts } from '../../../../hooks/useProducts';
import newArrival from './new-arrival.component.module.css';

export const NewArrival = () => {
  const { products } = useProducts();

  let newArrivas = products.filter((item) => item.newArrival);

  return (
    <section className={newArrival.arrival_container}>
      <h2 className={newArrival.heading}>
        <span className={newArrival.underline}></span>New Arrivals{' '}
      </h2>
      <div className={newArrival.product_grid}>
        {newArrivas?.map((item) => (
          <ProductCard buttonLabel='ADD TO CART' products={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};
