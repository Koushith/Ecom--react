import { Button } from '../../../../components';
import productSummary from './summary.component.module.css';

export const ProductSummary = () => {
  return (
    <div className={productSummary.summary_container}>
      <h4 className={productSummary.summary_heading}>PRICE DETAILS</h4>

      <div className={productSummary.summary_details}>
        <li>
          <ul>
            <p>Price (2 items)</p>
            <p>Rs.2499</p>
          </ul>
          <ul>
            <p>Discount</p>
            <p>-Rs.499</p>
          </ul>
          <ul>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </ul>

          <ul>
            <p>Coupon Discount</p>
            <p>-Rs.499</p>
          </ul>
        </li>
      </div>

      <ul className={productSummary.total_amount}>
        <h4>Total Amount</h4>
        <h4>Rs.2499</h4>
      </ul>

      <p class={productSummary.summary_text}>You will save Rs. 1999 on this order</p>

      <Button label='PLACE ORDER' />
    </div>
  );
};
