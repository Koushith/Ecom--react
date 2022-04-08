export const categoryFilter = (products, categoryFilter) => {
  const { womens, mens, shoes, jackets } = categoryFilter;

  if (!womens && !mens && !shoes && !jackets) return products; //if no category selected
  let womensFiltered = [],
    mensFiltered = [],
    shoesFiltered = [],
    jacketsFiltered = [];

  if (womens) {
    womensFiltered = products.filter((item) => item.categoryName === 'womens');
  }
  if (mens) {
    mensFiltered = products.filter((item) => item.categoryName === 'mens');
  }
  if (shoes) {
    shoesFiltered = products.filter((item) => item.categoryName === 'shoes');
  }
  if (jackets) {
    jacketsFiltered = products.filter((item) => item.categoryName === 'jackets');
  }

  return [...womensFiltered, ...mensFiltered, ...shoesFiltered, ...jacketsFiltered];
};
