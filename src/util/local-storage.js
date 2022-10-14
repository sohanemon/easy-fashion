const key = "easy-fashion-cart";
const addToLs = (cart) => {
  const products = {};
  cart.forEach((el) => {
    products[el._id] = el.quantity;
  });
  localStorage.setItem(key, JSON.stringify(products));
};
export { addToLs };
