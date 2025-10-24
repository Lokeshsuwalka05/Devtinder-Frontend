import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../features/feed/feedSlice";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills, _id } =
    user;
  const dispatch = useDispatch();
  const controls = useAnimation();
  const [swipeDirection, setSwipeDirection] = useState(null);

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

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      setSwipeDirection("right");
      controls.start({ x: 1000, opacity: 0 });
      handleClick("interested", _id);
    } else if (offset < -100 || velocity < -500) {
      setSwipeDirection("left");
      controls.start({ x: -1000, opacity: 0 });
      handleClick("ignored", _id);
    } else {
      controls.start({ x: 0 });
      setSwipeDirection(null);
    }
  };

  // Choose motion.div only if _id exists
  const CardWrapper = _id ? motion.div : "div";

  return (
    user && (
      <CardWrapper
        {...(_id
          ? {
              drag: "x",
              dragConstraints: { left: 0, right: 0 },
              onDragEnd: handleDragEnd,
              animate: controls,
              whileTap: { scale: 1.05 },
            }
          : {})}
        className="card bg-base-300 w-72 shadow-sm m-auto mt-5 cursor-grab relative overflow-hidden"
      >
        {/* ❤️ Heart animation when swiped right */}
        {swipeDirection === "right" && (
          <motion.div
            animate={{ opacity: 1, scale: 1.5, y: -80 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-red-500 text-7xl">❤️</span>
          </motion.div>
        )}

        {/* ❌ Cross animation when swiped left */}
        {swipeDirection === "left" && (
          <motion.div
            animate={{ opacity: 1, scale: 1.5, y: -80 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-red-600 text-7xl">❌</span>
          </motion.div>
        )}

        <figure className="mt-3">
          <img
            className="h-40 rounded-full border-4 border-white object-cover"
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
                className="btn btn-primary w-1/3"
                onClick={() => handleClick("ignored", _id)}
              >
                Ignored
              </button>
              <button
                className="btn btn-secondary w-1/3"
                onClick={() => handleClick("interested", _id)}
              >
                Interested
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-between">
              <button className="btn btn-secondary w-1/3" disabled>
                Interested
              </button>
              <button className="btn btn-primary w-1/3" disabled>
                Ignored
              </button>
            </div>
          )}
        </div>
      </CardWrapper>
    )
  );
};

export default UserCard;
