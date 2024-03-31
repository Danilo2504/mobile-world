import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
