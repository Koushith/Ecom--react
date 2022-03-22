import NewsLetter from './subscribe.component.module.css';

export const Subscribe = () => {
  return (
    <div className={NewsLetter.subscribe_container}>
      <h3 className='text text-large'>Subscribe to our Newsletter</h3>

      <p>To get a discount on the first purchase and access to closed shares and sales</p>

      <div>
        <input type='text' />
        <button className={NewsLetter.subscribe_btn}>Shop Now</button>
      </div>
    </div>
  );
};
