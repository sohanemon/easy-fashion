import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
export const ProductsContext = createContext([]);
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    return () => {};
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <div>
        <RouterProvider router={router} />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
