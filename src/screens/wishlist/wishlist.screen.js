import { Heading } from '../../components/primitives/text/text.component';
import ProductCard from '../../components/product-card/product-card.component';
import styles from './wishlist.screen.module.css';

export const WishListScreen = () => {
  return (
    // <section className={styles.wishlist_container}>
    //   <div className={styles.heading}>
    //     <Heading label='My Cart (1)' />
    //   </div>
    //   <div className={styles.product_container}>
    //     <ProductCard />
    //     <ProductCard />
    //     <ProductCard />
    //     <ProductCard />
    //     <ProductCard />
    //     <ProductCard />
    //   </div>
    // </section>

    <div>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
