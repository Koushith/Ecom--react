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
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log('from context', category);

  const fetchProducts = async () => {
    try {
      const {
        data: { products },
      } = await axios.get('/api/products');
      setIsLoading(false);

      const {
        data: { categories },
      } = await axios.get('/api/categories');
      setCategory(categories);
      setProducs(products);
    } catch (e) {
      console.log('error ', e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, category, isLoading, setProducs }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
