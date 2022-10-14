import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    return () => {};
  }, []);
  console.log(cart);
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div>
          <RouterProvider router={router} />
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
