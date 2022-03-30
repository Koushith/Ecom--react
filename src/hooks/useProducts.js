import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';

export const useProducts = () => useContext(ProductsContext);
