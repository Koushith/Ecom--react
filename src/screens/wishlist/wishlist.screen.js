import { useNavigate } from 'react-router-dom';
import { Heading } from '../../components/primitives/text/text.component';
import ProductCard from '../../components/product-card/product-card.component';
import { useWishList } from '../../hooks/useWishlist';
import styles from './wishlist.screen.module.css';

export const WishListScreen = () => {
  const {
    wishListState: { wishListArray },
  } = useWishList();
  const navigate = useNavigate();
  console.log('state', wishListArray);

  return (
    <section className={styles.wishlist_container}>
      <div className={styles.heading}>
        <Heading label={`My Cart (${wishListArray.length})`} />
      </div>
      <div className={styles.product_container}>
        {!wishListArray.length && <Heading label='No Wishlisted items- go to Shop' onClick={() => navigate('/shop')} />}

        {wishListArray.map((item) => {
          return <ProductCard products={item} />;
        })}
      </div>
    </section>
  );
};
