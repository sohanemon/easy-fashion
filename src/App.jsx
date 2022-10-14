import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./router";
import { getFromLs } from "./util/local-storage";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        setCart(getFromLs(data));
      });
    return () => {};
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={{ cart, setCart }}>
        <ToastContainer />
        <div>
          <RouterProvider router={router} />
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
