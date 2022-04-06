import { useEffect, useState } from 'react';
import { Heading } from '../../components/primitives/text/text.component';
import { useCart } from '../../hooks/useCart';
import { CartItem } from './containers/cart-items/cart-item.component';
import { ProductSummary } from './containers/summary/summary.component';
import productSummary from './my-cart.screen.module.css';

export const CartScreen = () => {
  const { cartProducts } = useCart();
  // console.log('items from caer screen', cart.cart.items);

  return (
    <section className={productSummary.cartScreen_container}>
      <div className={productSummary.heading}>
        <Heading label='My Cart (1)' />
      </div>
      <div className={productSummary.cart_itemContainer}>
        <div className={productSummary.cart_container}>
          {cartProducts.map((item, index) => (
            <CartItem items={item} key={index} />
          ))}
        </div>
        <ProductSummary />
      </div>
    </section>
  );
};
