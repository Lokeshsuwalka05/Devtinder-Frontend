import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };
    fetchedUser();
  }, [dispatch, navigate]);

  if (loading) return null;
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Body;
