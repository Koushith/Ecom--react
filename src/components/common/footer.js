import footerStyles from './footer.component.module.css';
import payment from '../../assets/images/payment.png';

export const Footer = () => {
  return (
    <footer className={footerStyles.footer_container}>
      <div className={footerStyles.footer_main}>
        <div className={footerStyles.flex_items}>
          <h2 className={footerStyles.sub_heading}>
            <span className={footerStyles.underline}></span>
            About
          </h2>
          <div className={footerStyles.listContainer}>
            <p>Ketch is one of India’s fastest growing tech Enabled house of Fashion Brands.</p>
          </div>
        </div>

        <div className={footerStyles.flex_items}>
          <h2 className={footerStyles.sub_heading}>
            <span className={footerStyles.underline}></span>
            Legal
          </h2>
          <ul className={footerStyles.listContainer}>
            <li>FAQ</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={footerStyles.flex_items}>
          <h2 className={footerStyles.sub_heading}>
            <span className={footerStyles.underline}></span>
            Connect
          </h2>

          <ul className={footerStyles.listContainer}>
            <li>
              <i className='fa-brands fa-twitter-square'></i>Twitter
            </li>
            <li>
              <i className='fa-brands fa-instagram-square'></i>Instagram
            </li>
            <li>
              <i className='fa-brands fa-facebook-square'></i>Facebook
            </li>
          </ul>
        </div>

        <div className={footerStyles.flex_items}>
          <h2 className={footerStyles.sub_heading}>
            <span className={footerStyles.underline}></span>
            ALL Sorts of Payments
          </h2>
          <div className={footerStyles.listContainer}>
            <p>All sorts of Payments are accepted here.</p>
            <img src={payment} alt='payment' />
          </div>
        </div>
      </div>
      <div className={footerStyles.copyright_container}>
        <h2 onClick={() => window.open('http://github.com/koushith', '_blank')}>
          Copyright? Heck No. 100% Open Source. | Ketch - Developed by Koushith Amin.{' '}
        </h2>
      </div>
    </footer>
  );
};
