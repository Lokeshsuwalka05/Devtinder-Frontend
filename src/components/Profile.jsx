import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const userData = useSelector((store) => {
    return store.user;
  });
  return userData && <EditProfile user={userData} />;
};
export default Profile;
