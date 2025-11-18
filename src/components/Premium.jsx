// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gold_icon from "../assets/coin.png";
import silver_icon from "../assets/silver-badge.png";
import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useEffect, useState } from "react";
const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    premiumVerify();
  }, []);
  const premiumVerify = async () => {
    try {
      const res = await axios.get(BASE_URL + "/premium/verify", {
        withCredentials: true,
      });
      if (res?.data?.isPremium === true) {
        setIsUserPremium(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  const handleBuy = async (type) => {
    try {
      const order = await axios.post(
        BASE_URL + "/create/order",
        { type },
        {
          withCredentials: true,
        }
      );
      const { info, key } = order.data;
      const { firstName, lastName, currency, Order_id, notes, amount } = info;
      const options = {
        key, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: `${firstName} ${lastName}`,
        description: "Test Transaction",
        Order_id,
        prefill: {
          name: `${notes.firstName} ${notes.lastName}`,
          email: notes.emailId,
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
        handler: premiumVerify,
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading) {
    return (
      <h1 className="font-semibold text-center text-2xl relative top-28">
        Checking your membership status...
      </h1>
    );
  }
  return isUserPremium ? (
    <h1 className="font-semibold text-center text-2xl relative top-28">
      You are already a Premium User💙
    </h1>
  ) : (
    <motion.div
      className="flex md:w-[90%] w-full m-auto mb-36 min-h-48 md:mb-32 relative top-20 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="card bg-base-200 w-[40%] rounded-box grid  grow place-items-center p-5">
        <div className="flex flex-col md:flex-row  gap-2">
          <img src={silver_icon} className="size-8 md:size-12"></img>
          <h1 className="font-bold text-xl md:text-3xl">Silver Membership</h1>
        </div>
        <ul className="font-light text-sm mb-2">
          <li> - Chat with other people</li>
          <li> - 100 connection Requests per day</li>
          <li> - Blue Tick</li>
          <li> - 3 months</li>
        </ul>
        <button className="btn btn-dash" onClick={() => handleBuy("Silver")}>
          Buy Silver
        </button>
      </div>
      <div className="divider divider-horizontal w-[20%]">OR</div>
      <div className="card bg-base-200 rounded-box w-[40%] grid grow place-items-center p-5">
        <div className="flex flex-col md:flex-row gap-2">
          <img src={gold_icon} className="size-5 md:size-8"></img>
          <h1 className="font-bold text-xl md:text-3xl">Gold Membership</h1>
        </div>
        <ul className="font-light text-sm">
          <li> - Chat with other people</li>
          <li> - Inifiniye connection Requests per day</li>
          <li> - Blue Tick</li>
          <li> - 6 months</li>
        </ul>
        <button
          className="btn btn-dash btn-warning"
          onClick={() => handleBuy("Gold")}
        >
          Buy Gold
        </button>
      </div>
    </motion.div>
  );
};
export default Premium;
