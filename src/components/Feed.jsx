import { useEffect, useState, useRef } from "react";
import { BASE_URL } from "../utills/constants";
import axios from "axios";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feed/feedSlice";

const Feed = () => {
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const limit = 5;
  const pageRef = useRef(0);

  const getFeed = async () => {
    if (isLoading || !hasMore) return;

    try {
      setIsLoading(true);
      pageRef.current += 1;
      const res = await axios.get(
        `${BASE_URL}/feed?page=${pageRef.current}&limit=${limit}`,
        {
          withCredentials: true,
        }
      );
      const users = res?.data?.feedOfUser || [];

      if (users.length === 0) {
        setHasMore(false);
        return;
      }

      dispatch(addFeed(users));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load - only when feed is null/empty and we have more data
  useEffect(() => {
    if ((feed == null || feed.length === 0) && hasMore && !isLoading) {
      getFeed();
    }
  }, [feed]);

  // No more data and feed is empty
  if (!hasMore && (!feed || feed.length === 0)) {
    return (
      <h1 className="text-center mt-10 text-xl font-semibold">No User Found</h1>
    );
  }

  return (
    <div className="mb-28">
      <p className="text-center text-gray-800 font-medium mb-6 text-xl">
        Let's connect with awesome developers
      </p>
      {feed && feed.length > 0 ? (
        <UserCard key={feed[0]._id} user={feed[0]} />
      ) : (
        <div className="flex justify-center mt-24">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
    </div>
  );
};

export default Feed;
