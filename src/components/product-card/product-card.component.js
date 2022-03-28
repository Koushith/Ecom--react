import React from 'react';
import { Button } from '../primitives/button/button.component';
import productCardStyles from './product-card.module.css';

function ProductCard(props) {
  const { buttonLabel } = props;
  return (
    <div className={productCardStyles.ecommerce_card}>
      <div className={productCardStyles.product_image}>
        <img src='https://getketchadmin.getketch.com/product/8905404555151/300/TTJ6006351_6.jpg' alt='product-img' />
      </div>
      <div className={productCardStyles.card_badge}>
        <h2>New</h2>
      </div>
      <div className={productCardStyles.actions_container}>
        <div className={productCardStyles.flex_container}>
          <h2 className={productCardStyles.product_heading}>Athena top</h2>
          <h3 className={productCardStyles.rating}>
            4 <i className='fa-solid fa-star'></i>{' '}
          </h3>
        </div>
        <div className={productCardStyles.card_price}>
          <h2 className={productCardStyles.price_now}> Rs.764 </h2>
          <h2 className={productCardStyles.discount}> (62% OFF) </h2>
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
