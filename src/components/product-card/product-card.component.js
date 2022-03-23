import React from 'react';
import { Button } from '../primitives/button/button.component';
import productCardStyles from './product-card.module.css';

function ProductCard() {
  return (
    // <div class='card ecomm'>
    //   <div class='product-image'>
    //     <img
    //       src='https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/18/07b7a314-decd-421a-b447-01b2411e24e61613643428870-1.jpg'
    //       alt='card-pic'
    //     />
    //   </div>
    //   <div class='card-badge'>NEW</div>
    //   <h2 class='card-title'>Athena top</h2>
    //   <div class='card-text'>4 star</div>
    //   <div class='card-price'>
    //     <span class='price-now'> Rs.764 </span>
    //     <span class='discount'> (62% OFF) </span>
    //   </div>

    //   <div style={{ display: 'flex', background: 'red' }}>
    //     <button class='btn btn-primary '>ADD TO CART</button>

    //     <i className='fa-solid fa-mobile'></i>
    //   </div>
    // </div>
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
          <Button label='ADD TO CART' variant='primary' />
          <i className='fa-regular fa-heart'></i>
          {/* <i className='fa-solid fa-heart'></i> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
