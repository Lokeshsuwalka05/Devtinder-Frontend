import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const userData = useSelector((store) => {
    return store.user;
  });
  if (!userData) {
    return (
      <div className="flex justify-center mt-24">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return userData && <EditProfile user={userData} />;
};
export default Profile;
