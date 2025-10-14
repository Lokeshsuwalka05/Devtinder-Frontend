import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utills/constants";
import toast from "react-hot-toast";
const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
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
      const message = err.response.data || "Something went wrong!";
      toast.error(message, { id: "loginToast" });
      console.log(err);
    } finally {
      setLoading(false); // enable button again
    }
  };
  const handleSignup = async () => {
    try {
      setError("");
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      const user = res?.data?.user;
      dispatch(addUser(user));
      navigate("/profile");
      toast.success(res?.data?.message, { id: "signupToast" });
    } catch (e) {
      const err = e?.response?.data?.message || "something went wrong";
      setError(err);
      console.log(e);
    }
  };
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm m-auto top-5 mb-44">
      <div className="card-body">
        <h2 className="card-title">{isLoginForm ? "Login" : "Sign Up"}</h2>
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
            type="password"
            className="input"
            placeholder="Type here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        {!isLoginForm && (
          <>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">FirstName</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">LastName</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </fieldset>
          </>
        )}
        <p
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() =>
            setIsLoginForm((prev) => {
              return !prev;
            })
          }
        >
          {isLoginForm ? "New User? SignUp Here" : "Existing User? Login Here"}
        </p>
        <p className="text-red-500 text-sm mt-1 shake">
          {error ? "Error :" + error : ""}
        </p>
        <div className="justify-center card-actions">
          <button
            className="btn btn-primary"
            onClick={isLoginForm ? handleLogin : handleSignup}
            disabled={loading}
          >
            {isLoginForm
              ? loading
                ? "Logging in..."
                : "Login"
              : loading
              ? "Signing up..."
              : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
