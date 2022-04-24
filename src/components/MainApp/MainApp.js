import { useEffect } from "react";
import { fetchData } from "../../data/data";
import Nopage from "../Nopage/Nopage";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Signup from "../Signup/Signup";
import MyToolbar from "../Toolbar/Toolbar";
import Chat from "../Chat/Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProfile from "../MyProfile/MyProfile";
const MainApp = () => {
  useEffect(() => {
    fetchData().then((data) => console.log(data));
  }, []);

  return (
    //set
    <BrowserRouter>
      <MyToolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;
