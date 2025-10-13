import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../features/feed/feedSlice";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills, _id } =
    user;
  const dispatch = useDispatch();
  const handleClick = async (status, userId) => {
    await axios.post(
      `${BASE_URL}/request/send/${status}/${userId}`,
      {},
      { withCredentials: true }
    );
    dispatch(removeFeed(userId));
  };
  return (
    user && (
      <div className="card bg-base-300 w-72 shadow-sm m-auto mt-5 mb-28">
        <figure className="mt-3 ">
          <img
            className="h-40 rounded-full border-4 border-white"
            src={photoUrl}
            alt="User Photo"
          />
        </figure>
        <div className="card-body p-3 h-44">
          <h2 className="card-title">
            {firstName.toUpperCase() + " " + lastName.toUpperCase()}
          </h2>
          <p className="font-semibold text-gray-600">{age + "," + gender}</p>
          <p className="font-semibold text-gray-600">{skills}</p>
          <p className="font-semibold text-gray-600">{about}</p>
          <div className="card-actions justify-between">
            <button
              className="btn btn-secondary"
              onClick={() => handleClick("interested", _id)}
            >
              Interested
            </button>
            <button className="btn btn-primary">Ignored</button>
          </div>
        </div>
      </div>
    )
  );
};
export default UserCard;
