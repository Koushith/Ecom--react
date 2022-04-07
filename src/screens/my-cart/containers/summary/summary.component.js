import { Button } from '../../../../components';
import { useCart } from '../../../../hooks/useCart';
import productSummary from './summary.component.module.css';

export const ProductSummary = () => {
  const { cartProducts } = useCart();

  const cartTotalReducer = (prev, curr) => prev + curr.quantity * curr.originalPrice;
  const cartTotalAmount = cartProducts.cartList.reduce(cartTotalReducer, 0);

  const itemInCartReducer = (prev, curr) => prev + curr.quantity;
  const totalItemsInCart = cartProducts.cartList.reduce(itemInCartReducer, 0);

  const totaldiscountReducer = (prev, curr) => prev + (curr.originalPrice - curr.price) * curr.quantity;
  const totaldiscount = cartProducts.cartList.reduce(totaldiscountReducer, 0);

  const discountedPriceReducer = (prev, curr) => prev + curr.quantity * curr.price;
  const discountedPrice = cartProducts.cartList.reduce(discountedPriceReducer, 0);

  return (
    <div className={productSummary.summary_container}>
      <h4 className={productSummary.summary_heading}>PRICE DETAILS</h4>

      <div className={productSummary.summary_details}>
        <li>
          <ul>
            <p>Price ({totalItemsInCart} items)</p>
            <p>Rs.{cartTotalAmount}</p>
          </ul>
          <ul>
            <p>Total Discount</p>
            <p>{totaldiscount}</p>
          </ul>
          <ul>
            <p>Discounted Price</p>
            <p>{discountedPrice}</p>
          </ul>
          <ul>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </ul>
        </li>
      </div>

      <ul className={productSummary.total_amount}>
        <h4>Total Amount</h4>
        <h4>Rs.{cartTotalAmount - totaldiscount}</h4>
      </ul>

      <p className={productSummary.summary_text}>You will save Rs. {totaldiscount} on this order</p>

      <Button label='PLACE ORDER' />
    </div>
  );
};
