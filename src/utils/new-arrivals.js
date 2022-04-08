export const newArrivalsFunc = (products, newArrival) => {
  if (newArrival) {
    return products.filter((item) => item.newArrival === newArrival);
  }
  console.log('new arrr filter', products);
  return products;
};
