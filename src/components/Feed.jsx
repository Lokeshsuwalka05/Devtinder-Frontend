/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BASE_URL } from "../utills/constants";
import axios from "axios";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feed/feedSlice";
import Loader from "./Loader";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      const users = res?.data?.feedOfUser || [];
      if (users.length === 0) {
        setLoading(false);
      }
      dispatch(addFeed(users));
    } catch (e) {
      console.error(e);
    }
  };

  // Initial load - only when feed is null/empty and we have more data
  useEffect(() => {
    getFeed();
  }, [dispatch]);

  useEffect(() => {
    if (feed && feed.length === 0 && loading) {
      getFeed();
    }
  }, [feed, loading]); // watch feed changes

  // No more data and feed is empty
  if (!feed) {
    return;
  }
  if (feed.length <= 0) {
    return loading ? (
      <Loader />
    ) : (
      <h1 className="font-semibold text-center text-2xl relative top-28">
        No User Found
      </h1>
    );
  }

  return (
    <div className="md:mb-20 mb-36">
      <p className="text-center text-gray-800 font-medium mb-6 text-xl">
        Let's connect with awesome developers
      </p>
      {feed && <UserCard key={feed[0]._id} user={feed[0]} />}
    </div>
  );
};

export default Feed;
