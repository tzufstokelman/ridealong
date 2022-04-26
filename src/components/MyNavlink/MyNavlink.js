import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "../Toolbar/Toolbar.module.css";
const MyNavlink = (props) => {
  return (
    <div className={classes.nav}>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                backgroundColor: "#DAAD86",
                width: "100%",
                height: "auto",
                textAlign: "center",
                color: "#450202",
                background: "#9b9bf1",
                textDecoration: "none",
                fontSize: "25px",
                marginBottom: "15px",
                border: "solid #450202",
              }
            : {
                marginBottom: "2px",
                fontSize: "18px",
                color: "whitesmoke",
                background: "#DAAD86",
              }
        }
        to={props.directTo}
      >
        {props.linkName}
      </NavLink>
    </div>
  );
};

export default MyNavlink;
