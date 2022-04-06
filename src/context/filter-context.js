import { createContext, useReducer } from 'react';
import { useProducts } from '../hooks/useProducts';
import { filterReducer } from '../reducers/filter-reducer';

const FilterContext = createContext();

const FilteredProvider = ({ children }) => {
  const { products } = useProducts();
  const initialProducts = {
    ...products,
  };

  const [state, dispatch] = useReducer(filterReducer, initialProducts);

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

export { FilterContext, FilteredProvider };
