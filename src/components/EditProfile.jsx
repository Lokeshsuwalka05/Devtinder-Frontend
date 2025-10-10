import curved_arrow from "../assets/curved-next-arrow.png";
import { BASE_URL } from "../utills/constants";
import UserCard from "./UserCard";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";
import toast from "react-hot-toast";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(user.skills);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [gender, setGender] = useState(user.gender);
  const dispatch = useDispatch();
  const handleUpdate = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          about,
          skills,
          photoUrl,
          gender,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.updatedUserData));
      toast.success(res?.data?.message);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="grid grid-cols-[2fr_1fr_2fr] mb-12">
      <div className="card w-96 bg-base-300 card-md shadow-sm ml-5 top-5 mb-14">
        <div className="card-body">
          <h2 className="card-title">Edit Profile</h2>
          <div className="flex gap-4">
            <fieldset className="fieldset w-6/12">
              <legend className="fieldset-legend">FirstName</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset w-6/12">
              <legend className="fieldset-legend">LastName</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="flex gap-4">
            <fieldset className="fieldset w-6/12">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset w-6/12">
              <legend className="fieldset-legend">Gender</legend>
              <select
                className="select select-bordered w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
              </select>
            </fieldset>
          </div>
          <div className="flex gap-4">
            <fieldset className="fieldset w-6/12">
              <legend className="fieldset-legend">Skills</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset w-6/12">
              <legend className="fieldset-legend">PhotoUrl</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">About</legend>
            <textarea
              className="textarea w-full"
              placeholder="Bio"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </fieldset>
          <div className="justify-center card-actions">
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <div className="my-auto mx-auto">
        <img src={curved_arrow} className="w-32"></img>
      </div>
      <div className="">
        <UserCard
          user={{ firstName, lastName, age, about, skills, photoUrl, gender }}
        />
      </div>
    </div>
  );
};
export default EditProfile;
