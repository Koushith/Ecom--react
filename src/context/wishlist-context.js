import { createContext, useReducer } from 'react';
import { wishListReducer } from '../reducers/wishlist-reducer';

const wishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishListState, setWishListState] = useReducer(wishListReducer, { wishListArray: [] });

  return <wishListContext.Provider value={{ wishListState, setWishListState }}>{children}</wishListContext.Provider>;
};

export { wishListContext, WishListProvider };
