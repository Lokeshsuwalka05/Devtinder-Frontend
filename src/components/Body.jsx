import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";
import Home from "./Home";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedUser = async () => {
      try {
        const userData = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(userData.data.user));
      } catch (err) {
        console.error(err);
      }
    };
    fetchedUser();
  }, [dispatch, navigate]);

  return (
    <>
      <div className="flex flex-col min-h-[150vh] md:min-h-[160vh]">
        <Navbar />
        <div className="pt-16 flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Body;
