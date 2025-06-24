import { Outlet } from "react-router-dom";
import { Header } from "./";

const Layout = () => {
  return (
    <>
      <Header />
      <div className='container mainContainer'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;