import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";

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
        console.log(err);
        if (err?.response?.status === 401) {
          navigate("/login");
        }
        console.error(err);
      }
    };
    fetchedUser();
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Body;
