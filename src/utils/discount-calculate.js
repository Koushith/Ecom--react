/**
 *
 * @param {*} discountedPrice
 * @param {*} originalPrice
 * @returns discount percentega
 */

export const discountCalc = (discountedPrice, originalPrice) => {
  return Math.floor(((originalPrice - discountedPrice) / originalPrice) * 100);
};
