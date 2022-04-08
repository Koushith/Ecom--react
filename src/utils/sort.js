export const sortProduct = (products, sortBy) => {
  switch (sortBy) {
    case 'LOW_TO_HIGH':
      return [...products].sort((a, b) => a.price - b.price);
    case 'HIGH_TO_LOW':
      return [...products].sort((a, b) => b.price - a.price);
    case 'RATING':
      return [...products].sort((a, b) => {
        if (a.rating > b.rating) return -1;
        return 1;
      });

    default:
      return products;
  }
};
