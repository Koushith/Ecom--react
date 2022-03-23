import React from 'react';
import { Button } from '../primitives/button/button.component';
import productCardStyles from './product-card.module.css';

function ProductCard(props) {
  const { buttonLabel } = props;
  return (
    <div className={productCardStyles.ecommerce_card}>
      <div className={productCardStyles.product_image}>
        <img
          src='https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/18/07b7a314-decd-421a-b447-01b2411e24e61613643428870-1.jpg'
          alt='product-img'
        />
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
