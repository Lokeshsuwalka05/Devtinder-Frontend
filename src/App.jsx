import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { Toaster } from "react-hot-toast";
import Connections from "./components/Connections";
import RequestReceived from "./components/RequestReceived";
const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<RequestReceived />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;
