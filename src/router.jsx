import { createBrowserRouter } from "react-router-dom";
import Main from "./components/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "*",
        element: <h1>ok</h1>,
      },
    ],
  },
]);
export default router;
