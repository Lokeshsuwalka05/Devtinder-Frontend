import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { createSocketConnection } from "../utills/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utills/constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const messagesContainerRef = useRef(null);
  const fetchChat = async () => {
    try {
      const res = await axios.get(BASE_URL + "/chat/" + targetUserId, {
        withCredentials: true,
      });
      const chatMessages = res?.data?.data?.map((msg) => {
        const { senderId, text } = msg;
        const { firstName, lastName } = senderId;
        return {
          firstName,
          lastName,
          text,
        };
      });
      setMessages(chatMessages);
    } catch (err) {
      console.log(err);
    }
  };
  const scrollToBottom = () => {
    messagesContainerRef.current.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    fetchChat();
  }, []);
  useEffect(() => {
    // As soon as the page load,socket connection is made and join chat event is emited.
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });
    socket.on("messageReceived", ({ firstName, text, lastName }) => {
      setMessages((prev) => {
        return [...prev, { firstName, lastName, text }];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId, user]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessages", {
      firstName: user.firstName,
      lastName: user.lastName,
      text: newMessage,
      userId,
      targetUserId,
    });
    setNewMessage("");
  };

  return (
    <>
      <div className="mt-5 flex justify-center">
        <motion.h1
          className="text-xs md:text-2xl tracking-wide font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tech Talk
        </motion.h1>
      </div>
      <motion.div
        className=" w-[90%] md:w-[60%] mx-auto mt-10  rounded-xl shadow-2xl overflow-hidden mb-36 md:mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-white h-[80vh] p-4 flex flex-col">
          <div
            ref={messagesContainerRef}
            className="flex-1 space-y-2 overflow-y-auto custom-scrollbar"
          >
            {messages.map((msg, index) => {
              const { firstName, lastName, text } = msg;
              return (
                <div
                  key={index}
                  className={`chat ${
                    firstName === user.firstName ? "chat-end" : "chat-start"
                  }`}
                >
                  <div className="chat-header text-black">
                    {firstName + " " + lastName}
                    {/* <time className="text-xs opacity-50">2 hours ago</time> */}
                  </div>
                  <div className="chat-bubble">{text}</div>
                  {/* <div className="chat-footer opacity-50 text-black">Seen</div> */}
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              name="chat"
              type="text"
              className="flex-1 border border-black rounded-l-md px-4 py-2 focus:outline-none placeholder-gray-400 text-black"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="btn btn-outline btn-primary"
              onClick={() => sendMessage()}
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Chat;
