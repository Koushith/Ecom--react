import { useContext } from 'react';
import { FilterContext } from '../context/filter-context';

export const useFilter = () => useContext(FilterContext);
