import { useEffect } from "react";
import { BASE_URL } from "../utills/constants";
import axios from "axios";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feed/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  // Initial load - only when feed is null/empty and we have more data
  useEffect(() => {
    const getFeed = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/feed`, {
          withCredentials: true,
        });
        const users = res?.data?.feedOfUser || [];

        if (users.length === 0) {
          return;
        }

        dispatch(addFeed(users));
      } catch (e) {
        console.error(e);
      }
    };

    getFeed();
  }, [dispatch]);

  // No more data and feed is empty
  if (!feed || feed.length === 0) {
    return (
      <h1 className="text-center mt-10 text-xl font-semibold">No User Found</h1>
    );
  }

  return (
    <div className="mb-28">
      {feed && feed.length > 0 ? (
        <>
          <p className="text-center text-gray-800 font-medium mb-6 text-xl">
            Let's connect with awesome developers
          </p>
          <UserCard key={feed[0]._id} user={feed[0]} />
        </>
      ) : (
        <div className="flex justify-center mt-24">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
    </div>
  );
};

export default Feed;
