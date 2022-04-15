import Login from "../Login/Login";
import { useEffect } from "react";
import { fetchData } from "../../data/data";
const MainApp = () => {
  useEffect(() => {
    fetchData().then((data) => console.log(data));
  }, []);

  return (
    //set
    <div>
      <Login />
    </div>
  );
};

export default MainApp;
