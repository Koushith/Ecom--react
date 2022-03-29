import { useNavigate } from 'react-router-dom';
import Header from './header.component.module.css';

export const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <section className={Header.header_container}>
      <div className={Header.header_cta_container}>
        <div className={Header.header_cta_heading}>
          <h1>2022</h1>
          <div>
            <p>Autumn</p>
            <p>Collection</p>
          </div>
        </div>
        <div className={Header.header_action_container}>
          <button className={Header.shop_now} onClick={() => navigate('/shop')}>
            Shop Now
          </button>
          <button className={Header.outlined}>Learn More</button>
        </div>
      </div>
    </section>
  );
};
