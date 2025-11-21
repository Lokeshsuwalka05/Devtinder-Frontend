import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { io } from "socket.io-client";
import { createSocketConnection } from "../utills/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;
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

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);
  // const sendMessage = () => {
  //   const socket = io();
  //   socket.emit("sendMessages", (newMessage) => {
  //     console.log("message: " + newMessage);
  //   });
  // };

  return (
    <div className="max-w-md mx-auto mt-10  rounded-xl shadow-lg overflow-hidden mb-36 md:mb-24">
      <div className="bg-white h-[500px] p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((msg) => {
            return (
              <>
                <div className="chat chat-start">
                  <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">2 hours ago</time>
                  </div>
                  <div className="chat-bubble">{msg}</div>
                  <div className="chat-footer opacity-50">Seen</div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">2 hour ago</time>
                  </div>
                  <div className="chat-bubble">I loved you.</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
              </>
            );
          })}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            className="flex-1 border rounded-l-md px-4 py-2 focus:outline-none"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="btn btn-outline btn-primary"
            // onClick={() => sendMessage()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
