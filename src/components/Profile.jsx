import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import Loader from "./Loader";

const Profile = () => {
  const userData = useSelector((store) => {
    return store.user;
  });
  if (!userData) {
    return <Loader />;
  }
  return userData && <EditProfile user={userData} />;
};
export default Profile;
