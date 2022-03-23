import Discount from './discount.module.css';

export const styles = {
  heading: 'text text-large',
  button: 'btn btn-success',
  h3: 'text',
};

export const DiscountCard = () => {
  return (
    <div className={Discount.discount_container}>
      <h3 className={styles.h3}>Discounts are waiting for you!!</h3>
      <h2>Valid till 23rd May</h2>
      <h1>20% Off On</h1>
      <h2>Dresses & Sweatshirts</h2>
      <button className={Discount.discount_btn}>Shop Now</button>
    </div>
  );
};
