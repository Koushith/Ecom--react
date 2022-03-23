import { Heading } from '../../components/primitives/text/text.component';
import ProductCard from '../../components/product-card/product-card.component';
import wishlistScreen from './wishlist.screen.module.css';

export const WishListScreen = () => {
  return (
    <section className={wishlistScreen.wishlist_container}>
      <div className={wishlistScreen.heading}>
        <Heading label='My Cart (1)' />
      </div>

      <div className={wishlistScreen.product_container}>
        <ProductCard buttonLabel='MOVE TO CART' />
        <ProductCard buttonLabel='MOVE TO CART' />
        <ProductCard buttonLabel='MOVE TO CART' />
        <ProductCard buttonLabel='MOVE TO CART' />
        <ProductCard buttonLabel='MOVE TO CART' />
        <ProductCard buttonLabel='MOVE TO CART' />
      </div>
    </section>
  );
};
