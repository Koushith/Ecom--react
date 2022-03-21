import { Routes, Route } from 'react-router-dom';
import {
  HomeScreen,
  AllProductsScreen,
  CartScreen,
  ProductDetailsScreen,
  ProfileScreen,
  WishListScreen,
} from './screens';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='shop' element={<AllProductsScreen />} />
      <Route path='cart' element={<CartScreen />} />
      <Route path='wishlist' element={<WishListScreen />} />
      <Route path='product/:id' element={<ProductDetailsScreen />} />
      <Route path='profile' element={<ProfileScreen />} />
    </Routes>
  );
}

export default App;
