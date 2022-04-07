import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../../../../components';
import { useCart } from '../../../../hooks/useCart';
import { useWishList } from '../../../../hooks/useWishlist';
import { discountCalc } from '../../../../utils';
import cartItem from './cart-item.component.module.css';

export const CartItem = (props) => {
  const { items } = props;
  const { setCartProducts } = useCart();
  const { wishListState, setWishListState } = useWishList();
  const navigate = useNavigate();
  const isItemInWishlist = () => wishListState.wishListArray.find((item) => item.id === items.id);

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
            <button onClick={() => setCartProducts({ type: 'DECREMENT_QTY', payload: items })}>-</button>
            <input type='number' value={items.quantity} />
            <button onClick={() => setCartProducts({ type: 'INCREMENT_QTY', payload: items })}>+</button>
          </div>
        </div>
      </div>
      <div className={cartItem.cart_actions}>
        {' '}
        <Button
          label='REMOVE'
          variant='ghost'
          onClick={() =>
            setCartProducts({
              type: 'REMOVE_FROM_CART',
              payload: items,
            })
          }
        />
        {wishListState.wishListArray.find((item) => item.id === items.id) ? (
          <Button label='GO TO WISHLIST' onClick={() => navigate('/wishlist')} />
        ) : (
          <Button
            onClick={() =>
              setWishListState({
                type: 'ADD_TO_WISHLIST',
                payload: items,
              })
            }
            variant='primary'
            label='MOVE TO WISHLIST'
          />
        )}
      </div>
    </div>
  );
};
