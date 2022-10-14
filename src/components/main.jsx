import { Outlet } from "react-router-dom";
import Navbar from "./header/navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
