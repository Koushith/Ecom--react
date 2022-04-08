import { Heading } from '../../components/primitives/text/text.component';
import { useCart } from '../../hooks/useCart';
import { CartItem } from './containers/cart-items/cart-item.component';
import { ProductSummary } from './containers/summary/summary.component';
import productSummary from './my-cart.screen.module.css';

export const CartScreen = () => {
  const { cartProducts } = useCart();

  return (
    <section className={productSummary.cartScreen_container}>
      <div className={productSummary.heading}>
        <Heading label={`My Catrt (${cartProducts.cartList.length})`} />
      </div>
      <div className={productSummary.cart_itemContainer}>
        <div className={productSummary.cart_container}>
          {cartProducts.cartList.length === 0 && <Heading label='No items in the cart' />}
          {cartProducts.cartList.map((item, index) => (
            <CartItem items={item} key={index} />
          ))}
        </div>
        <ProductSummary />
      </div>
    </section>
  );
};
