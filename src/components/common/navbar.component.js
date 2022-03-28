import { Button } from '../primitives/button/button.component';
import navbarStyles from './navbar.component.module.css';

export const NavBar = () => {
  return (
    <div className={navbarStyles.navbar_container}>
      <div className={navbarStyles.navbar_main}>
        <h2 className={navbarStyles.logo}>KETCH</h2>
        <div className={navbarStyles.search_container}>
          <i class='fa fa-search' aria-hidden='true'></i>
          <input type='text' placeholder='search' />
        </div>
        <nav>
          <ul>
            <button variant='ghost' label='Login' class={navbarStyles.login_btn}>
              Login
            </button>
            <li>
              WishList
              {/* <span>2</span> */}
            </li>
            <li>
              Cart
              {/* <span>2</span> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
