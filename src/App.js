import { Routes, Route } from 'react-router-dom';
import {
  HomeScreen,
  AllProductsScreen,
  CartScreen,
  ProductDetailsScreen,
  ProfileScreen,
  WishListScreen,
  LoginScreen,
  RegisterScreen,
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
      <Route path='login' element={<LoginScreen />} />
      <Route path='register' element={<RegisterScreen />} />
    </Routes>
  );
}

export default App;
