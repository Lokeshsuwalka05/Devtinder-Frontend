import { useEffect, useState } from "react";
import { BASE_URL } from "../utills/constants";
import axios from "axios";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feed/feedSlice";

const Feed = () => {
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();
  const limit = 5;
  const getFeed = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/feed?page=${pageNo}&limit=${limit}`,
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
    }
  };
  useEffect(() => {
    getFeed();
  }, [pageNo]);

  useEffect(() => {
    if (feed && feed.length <= 1 && hasMore) {
      setPageNo((prev) => prev + 1);
    }
  }, [feed]);
  if (!hasMore && feed.length == 0) {
    return <h1>No User Found</h1>;
  }
  return feed && feed.length > 0 ? (
    <>
      <UserCard user={feed[0]} />
    </>
  ) : (
    <div className="flex justify-center">
      <span className="loading loading-spinner loading-xl "></span>
    </div>
  );
};
export default Feed;
