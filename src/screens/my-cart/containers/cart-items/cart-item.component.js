import { Button } from '../../../../components';
import cartItem from './cart-item.component.module.css';

export const CartItem = () => {
  return (
    <div className={cartItem.item_container}>
      <div className={cartItem.details_container}>
        <div className={cartItem.product_image}>
          <img
            src='https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/18/d23d46d1-816b-4ecc-ac6e-f1f7f412aeb31613650868037-1.jpg'
            alt='product-img'
          />
        </div>
        <div>
          <h2 className={cartItem.product_heading}>Athena top</h2>
          <h3 className={cartItem.rating}>
            4 <i className='fa-solid fa-star'></i>{' '}
          </h3>
          <div className={cartItem.price_container}>
            <p className={cartItem.discounted_price}>₹850</p>
            <p className={cartItem.actual_price}>(₹1500)</p>
            <p className={cartItem.discount_percentage}>(50% OFF)</p>
          </div>
          <div className={cartItem.quantity_container}>
            <button>-</button>
            <input type='number' value='2' />
            <button>+</button>
          </div>
        </div>
      </div>
      <div className={cartItem.cart_actions}>
        {' '}
        <Button label='REMOVE' variant='ghost' />
        <Button label='MOVE TO WISHLIST' variant='primary' />
      </div>
    </div>
  );
};
