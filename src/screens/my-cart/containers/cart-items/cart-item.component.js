import { Button } from '../../../../components';
import { discountCalc } from '../../../../utils';
import cartItem from './cart-item.component.module.css';

export const CartItem = (props) => {
  const { cartProducts } = props;

  // console.log('itemsssss', items);
  return (
    <div className={cartItem.item_container}>
      <div className={cartItem.details_container}>
        <div className={cartItem.product_image}>
          <img src={items.imgOne} alt='product-img' />
        </div>
        <div>
          <h2 className={cartItem.product_heading}>{items.categoryName}</h2>
          <h3 className={cartItem.rating}>
            {items.rating} <i className='fa-solid fa-star'></i>{' '}
          </h3>
          <div className={cartItem.price_container}>
            <p className={cartItem.discounted_price}>₹ {items.price}</p>
            <p className={cartItem.actual_price}>₹ {items.originalPrice}</p>
            <p className={cartItem.discount_percentage}>({discountCalc(items.price, items.originalPrice)}% OFF)</p>
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
