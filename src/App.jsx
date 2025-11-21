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
import { ThemeProvider } from "./context/ThemeProvider";
import Home from "./components/Home";
import TermOfUse from "./components/TermOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundAndCancellation from "./components/RefundAndCancellation";
import Contact from "./components/Contact";
import Disclaimer from "./components/Disclaimar";
import ShippingAndDelivery from "./components/ShippingAndDelivery";
import Premium from "./components/Premium";
import Chat from "./components/Chat";
const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <ThemeProvider>
        <Provider store={appStore}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="/" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/requests" element={<RequestReceived />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="/chat/:targetUserId" element={<Chat />} />
              </Route>
              <Route path="/termsOfUse" element={<TermOfUse />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/refundAndCancellation"
                element={<RefundAndCancellation />}
              />
              <Route path="/disclaimar" element={<Disclaimer />} />
              <Route
                path="/shippingAndDelivery"
                element={<ShippingAndDelivery />}
              />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </>
  );
};
export default App;
