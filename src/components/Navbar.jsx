import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utills/constants";
import axios from "axios";
import { removeUser } from "../features/user/userSlice";
import toast from "react-hot-toast";
const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      navigate("/login");
      toast.success(response.data);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-1000">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Devtinder
        </Link>
      </div>

      {user && (
        <div className="flex gap-2 items-center">
          <p className="font-semibold">
            Welcome,
            {user?.firstName
              ? user.firstName.charAt(0).toUpperCase() +
                user.firstName.slice(1).toLowerCase()
              : ""}
          </p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Photo" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Request Received</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
