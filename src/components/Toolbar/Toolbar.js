import { NavLink, Router } from "react-router-dom";
import react from "react";
import classes from "./Toolbar.module.css";
import MyNavlink from "../MyNavlink/MyNavlink";
const MyToolbar = () => {
  return (
    <div
      className={
        classes.app
        // {
        // display: "flex",
        // flexFlow: "row",
        // background: "#DAAD86",
        // padding: "0.4%",
        // height: "100%",
        // overflowX: "auto",
        // margin: "0",
        // boxSizing: "border-box",
        // }
      }
    >
      <MyNavlink
        // exact activeClassName="active"
        directTo="/"
        linkName="Home"
      />
      <MyNavlink
        // exact activeClassName="active"
        directTo="/Login"
        linkName="Login"
      />
      <MyNavlink
        // exact activeClassName="active"
        directTo="/Signup"
        linkName="Signup"
      />
      <MyNavlink
        // exact activeClassName="active"
        directTo="/MyProfile"
        linkName="MyProfile"
      />
      <MyNavlink
        // exact activeClassName="active"
        directTo="/Chat"
        linkName="Chat"
      />
    </div>
  );
};

export default MyToolbar;
