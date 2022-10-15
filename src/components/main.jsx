import { Outlet } from "react-router-dom";
import InfoBox from "./body/infoBox";
import Navbar from "./header/navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <InfoBox />
    </>
  );
};

export default Main;
