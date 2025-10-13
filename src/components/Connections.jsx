import axios from "axios";
import { BASE_URL } from "../utills/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../features/connections/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.connections));
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getConnections();
  }, []);

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md w-1/2 m-auto pb-0 mt-7 mb-24">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide m-auto">
          Connections
        </li>

        {connections &&
          connections.map((connection) => {
            const { firstName, lastName, age, gender, photoUrl } = connection;
            return (
              <li className="list-row">
                <div>
                  <img className="size-10 rounded-box" src={photoUrl} />
                </div>
                <div>
                  <div>{firstName + " " + lastName}</div>
                  <div className="text-xs uppercase font-semibold opacity-60">
                    {age && <span>{age}</span>}
                    {gender && <span>{"," + gender}</span>}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Connections;
