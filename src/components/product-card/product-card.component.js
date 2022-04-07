import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useWishList } from '../../hooks/useWishlist';
import { discountCalc } from '../../utils';
import { Button } from '../primitives/button/button.component';
import productCardStyles from './product-card.module.css';

function ProductCard(props) {
  const { products } = props;

  const { setCartProducts, cartProducts } = useCart();

  const { wishListState, setWishListState } = useWishList();

  const navigate = useNavigate();

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
          <h3 className={products.rating > 3 ? productCardStyles.rating : productCardStyles.rating_red}>
            {products.rating} <i className='fa-solid fa-star'></i>{' '}
          </h3>
        </div>
        <div className={productCardStyles.card_price}>
          <h2 className={productCardStyles.price_now}> Rs.{products.price} </h2>
          <h2 className={productCardStyles.discount}>({discountCalc(products.price, products.originalPrice)}% OFF) </h2>
        </div>

        <div className={productCardStyles.actions_button}>
          {/* <Button
            label='ADD TO CART'
            variant='primary'
            onClick={() => setCartProducts({ type: 'ADD_TO_CART', payload: products })}
          /> */}

          {cartProducts.cartList.find((cartItem) => cartItem.id === products.id) ? (
            <Button label='GO TO CART' variant='ghost' onClick={() => navigate('/cart')} />
          ) : (
            <Button
              label='ADD TO CART'
              variant='primary'
              onClick={() => setCartProducts({ type: 'ADD_TO_CART', payload: products })}
            />
          )}
          {/*
          <i className='fa-regular fa-heart'></i> */}

          {wishListState.wishListArray.find((product) => product.id === products.id) ? (
            <i
              className='fa-solid fa-heart'
              onClick={() =>
                setWishListState({
                  type: 'REMOVE_FROM_WISHLIST',
                  payload: products,
                })
              }
            >
              {' '}
            </i>
          ) : (
            <i
              className='fa-regular fa-heart'
              onClick={() => setWishListState({ type: 'ADD_TO_WISHLIST', payload: products })}
            >
              {' '}
            </i>
          )}

          {/* <i className='fa-solid fa-heart'></i> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
