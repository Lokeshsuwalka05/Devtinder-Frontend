import { useEffect } from "react";
import { BASE_URL } from "../utills/constants";
import axios from "axios";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feed/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.feedOfUser));
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    feed && (
      <>
        <UserCard user={feed[0]} />
      </>
    )
  );
};
export default Feed;
