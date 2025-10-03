import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./Body";
import Login from "./Login";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
