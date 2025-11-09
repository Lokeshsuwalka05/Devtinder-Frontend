import { useEffect, useState } from "react";
import { BASE_URL } from "../utills/constants.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addRequests,
  removeRequest,
} from "../features/requests/requestSlice.js";
import toast from "react-hot-toast";
import Loader from "./Loader.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const RequestReceived = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const [loading, setLoading] = useState(true);
  const requestReview = async (status, id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review" + "/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
      toast.success("Connection request " + status + " successfully");
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(BASE_URL + "/user/request/received", {
          withCredentials: true,
        });
        dispatch(addRequests(res?.data?.users));
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRequests();
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  }
  if (requests.length === 0) {
    return (
      <h1 className="font-semibold text-center text-xl relative top-28">
        You don’t have any pending requests
      </h1>
    );
  }
  return (
    <motion.ul
      className="list bg-base-100 rounded-box shadow-sm w-full md:w-1/2 md:m-auto mb-36 md:mb-24 mt-4 relative top-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide text-center">
        Request Received
      </li>
      {requests &&
        requests.map((request) => {
          const { firstName, lastName, age, gender, photoUrl, _id } =
            request.fromUserId;
          return (
            <li className="list-row " key={_id}>
              <div>
                <img className="size-10 rounded-box" src={photoUrl} />
              </div>
              <div>
                <div className="text-xs  font-semibold ">
                  {firstName + " " + lastName}
                </div>
                <div className="text-xs uppercase font-light opacity-60">
                  {age && <span>{age}</span>}
                  {gender && <span>,{gender}</span>}
                </div>
              </div>
              <button
                className="btn btn-outline btn-success h-1/2 my-auto"
                onClick={() => requestReview("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-outline btn-error h-1/2 my-auto"
                onClick={() => requestReview("rejected", request._id)}
              >
                Reject
              </button>
            </li>
          );
        })}
    </motion.ul>
  );
};
export default RequestReceived;
