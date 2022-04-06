import { useProducts } from '../hooks/useProducts';

export const filterReducer = (state, action) => {
  console.log('checking state inside reducer', state);
  switch (action.type) {
    case 'PRICE_HIGH_TO_LOW':
      return;

    default:
      return state;
  }
};
