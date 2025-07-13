import { Outlet } from "react-router-dom";
import { Header } from "./";
import { Carousel } from "../common";
import { images } from "../../utils/assets";

const slides = [
  {
    id: 1,
    imageUrl: images("carousel-1.jpg")
  },
  {
    id: 2,
    imageUrl: images("carousel-2.jpg")
  },
  {
    id: 3,
    imageUrl: images("carousel-3.jpeg")
  },
];

const Layout = () => {
  return (
    <>
      <Header />
      <Carousel type="images" slides={slides}/>
      <div className='container mainContainer'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;