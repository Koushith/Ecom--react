import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
// import { products } from '../backend/db/products';

/**
 * List of all Products.
 */
const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
  const [products, setProducs] = useState([]);

  const fetchProducts = async () => {
    try {
      const {
        data: { products },
      } = await axios.get('/api/products');

      setProducs(products);
    } catch (e) {
      console.log('error ', e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export { ProductsContext, ProductsProvider };
