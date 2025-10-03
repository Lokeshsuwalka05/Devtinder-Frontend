import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Body;
