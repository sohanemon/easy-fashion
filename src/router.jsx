import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./components/body/product-page";
import Summary from "./components/body/summary";
import Main from "./components/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Summary />,
      },
      {
        path: "*",
        element: <h1>ok</h1>,
      },
    ],
  },
]);
export default router;
