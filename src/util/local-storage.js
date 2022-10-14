const key = "easy-fashion-cart";
const addToLs = (cart) => {
  const products = {};
  cart.forEach((el) => {
    products[el._id] = el.quantity;
  });
  localStorage.setItem(key, JSON.stringify(products));
};

const getFromLs = (allProducts) => {
  const cart = JSON.parse(localStorage.getItem(key));
  const loadedData = [];
  for (const i in cart) {
    const matchedProduct = allProducts.find((el) => i === el._id);
    loadedData.push({ ...matchedProduct, quantity: cart[i] });
  }
  return loadedData;
};

export { addToLs, getFromLs };
