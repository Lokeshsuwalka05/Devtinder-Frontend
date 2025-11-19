import { useParams } from "react-router";

const Chat = () => {
  const { toUserId } = useParams();
  console.log(toUserId);
  return <>Hello</>;
};
export default Chat;
