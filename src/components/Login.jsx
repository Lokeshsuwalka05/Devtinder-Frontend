import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utills/constants";
import toast from "react-hot-toast";
const Login = () => {
  const [emailId, setEmail] = useState("lokeshsuwalka2002@gmail.com");
  const [password, setPassword] = useState("Lokesh@123");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      // prevent multiple clicks
      if (loading) return;
      setLoading(true); // disable button
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data.loggedInUser));
      navigate("/");
      toast.success(response.data.message, { id: "loginToast" });
    } catch (err) {
      toast.error(err.response.data, { id: "loginToast" });
      console.log(err);
    } finally {
      setLoading(false); // enable button again
    }
  };
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm m-auto top-5 mb-44">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <div className="justify-center card-actions">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
