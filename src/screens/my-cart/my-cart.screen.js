import { Heading } from '../../components/primitives/text/text.component';
import { ProductSummary } from './containers/summary/summary.component';
import productSummary from './my-cart.screen.module.css';

export const CartScreen = () => {
  return (
    <section className={productSummary.cartScreen_container}>
      <Heading label='My Cart' />
      <div className={productSummary.cart_itemContainer}>
        <div>cart</div>
        <div>
          <ProductSummary />
        </div>
      </div>
    </section>
  );
};
