import { useContext } from 'react';
import { wishListContext } from '../context/wishlist-context';

export const useWishList = () => useContext(wishListContext);
