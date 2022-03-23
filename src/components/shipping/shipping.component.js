import ShippingStyle from './shipping.componant.module.css';

export const Shipping = () => {
  return (
    <div className={ShippingStyle.grid_container}>
      <div className={ShippingStyle.flex_container}>
        <i className='fa-solid fa-truck'></i>
        <div>
          <h2>Free Shipping</h2>
          <p>On all orders above 1200rs</p>
        </div>
      </div>
      <div className={ShippingStyle.flex_container}>
        <i className='fa-solid fa-mobile'></i>
        <div>
          <h2>Call us Anytime</h2>
          <p>+91-8217527530</p>
        </div>
      </div>

      <div className={ShippingStyle.flex_container}>
        <i className='fa-solid fa-location-dot'></i>
        <div>
          <h2>Our Location</h2>
          <p>557-6308 Lacinia Road</p>
        </div>
      </div>
    </div>
  );
};
