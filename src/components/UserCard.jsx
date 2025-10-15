import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../features/feed/feedSlice";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills, _id } =
    user;
  const dispatch = useDispatch();
  const handleClick = async (status, userId) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(userId));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    user && (
      <>
        <div className="card bg-base-300 w-72 shadow-sm m-auto mt-5">
          <figure className="mt-3 ">
            <img
              className="h-40 rounded-full border-4 border-white"
              src={photoUrl}
              alt="User Photo"
            />
          </figure>
          <div className="card-body p-3 min-h-44">
            <h2 className="card-title">
              {firstName.toUpperCase() + " " + lastName.toUpperCase()}
            </h2>
            <p className="font-semibold text-gray-600">
              {age && <span>{age}</span>}
              {gender && <span>{"," + gender}</span>}
            </p>
            <p className="font-semibold text-gray-600">{skills}</p>
            <p className="font-semibold text-gray-600 break-words">{about}</p>
            {_id ? (
              <div className="card-actions justify-between">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleClick("interested", _id)}
                >
                  Interested
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick("ignored", _id)}
                >
                  Ignored
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-between">
                <button className="btn btn-secondary w-1/3" disabled="true">
                  Interested
                </button>
                <button className="btn btn-primary w-1/3" disabled="true">
                  Ignored
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    )
  );
};
export default UserCard;
