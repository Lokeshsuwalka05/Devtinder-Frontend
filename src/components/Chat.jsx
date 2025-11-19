import { useParams } from "react-router";

const Chat = () => {
  const { toUserId } = useParams();
  return (
    <div className="max-w-md mx-auto mt-10  rounded-xl shadow-lg overflow-hidden mb-36 md:mb-24">
      <div className="bg-white h-[500px] p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-2">
          <div className="chat chat-start">
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
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
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            className="flex-1 border rounded-l-md px-4 py-2 focus:outline-none"
            placeholder="Type a message..."
          />
          <button className="btn btn-outline btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
