import React from 'react';
import { discountCalc } from '../../utils';
import { Button } from '../primitives/button/button.component';
import productCardStyles from './product-card.module.css';

function ProductCard(props) {
  const { buttonLabel, products } = props;
  console.log('products', products);
  return (
    <div className={productCardStyles.ecommerce_card}>
      <div className={productCardStyles.product_image}>
        <img src={products.imgOne} alt={products.title} />
      </div>

      {products.newArrival && (
        <div className={productCardStyles.card_badge}>
          <h2>New</h2>
        </div>
      )}
      <div className={productCardStyles.actions_container}>
        <div className={productCardStyles.flex_container}>
          <h2 className={productCardStyles.product_heading}>{products.title} </h2>
          <h3 className={productCardStyles.rating}>
            {products.rating} <i className='fa-solid fa-star'></i>{' '}
          </h3>
        </div>
        <div className={productCardStyles.card_price}>
          <h2 className={productCardStyles.price_now}> Rs.{products.price} </h2>
          <h2 className={productCardStyles.discount}>({discountCalc(products.price, products.originalPrice)}% OFF) </h2>
        </div>

        <div className={productCardStyles.actions_button}>
          <Button label={buttonLabel} variant='primary' />
          <i className='fa-regular fa-heart'></i>
          {/* <i className='fa-solid fa-heart'></i> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
