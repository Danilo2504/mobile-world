import { Outlet } from "react-router-dom";
import { Header } from "./";
import { Carousel } from "../common";

const Layout = () => {
  return (
    <>
      <Header />
      <Carousel/>
      <div className='container mainContainer'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;