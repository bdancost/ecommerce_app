import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";

const MainLayout = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* not found routes */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainLayout;
