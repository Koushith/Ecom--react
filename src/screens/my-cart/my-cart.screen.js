import { Heading } from '../../components/primitives/text/text.component';
import { CartItem } from './containers/cart-items/cart-item.component';
import { ProductSummary } from './containers/summary/summary.component';
import productSummary from './my-cart.screen.module.css';

export const CartScreen = () => {
  return (
    <section className={productSummary.cartScreen_container}>
      <div className={productSummary.heading}>
        <Heading label='My Cart (1)' />
      </div>
      <div className={productSummary.cart_itemContainer}>
        <div className={productSummary.cart_container}>
          <CartItem />
          <CartItem />
        </div>

        <ProductSummary />
      </div>
    </section>
  );
};
