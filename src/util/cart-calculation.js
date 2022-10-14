const cartCalculation = (cart) => {
  const addedProduct = cart.reduce((p, c) => p + c.quantity, 0);
  const totalPrice = cart.reduce((p, c) => p + c.quantity * c.price, 0);
  const tax = (totalPrice * 0.1).toFixed(2);
  return {
    addedProduct,
    totalPrice,
    tax,
    grandTotal: totalPrice + tax,
  };
};
export default cartCalculation;
