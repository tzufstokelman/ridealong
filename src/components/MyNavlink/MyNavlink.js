import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import classes from "../Toolbar/Toolbar.module.css";
const MyNavlink = (props) => {
  return (
    <div className={classes.nav}>
      <NavLink
        // style={{
        //   display: "inline-block",
        //   backgroundColor: "#BC986A",
        //   width: "100%",
        //   height: "auto",
        //   textAlign: "center",
        //   // padding: "1em 0em",
        //   // margin: "20px",
        //   textDecoration: "none",
        // }}
        style={({ isActive }) =>
          isActive
            ? {
                backgroundColor: "#BC986A",
                width: "100%",
                height: "auto",
                textAlign: "center",
                color: "#fff",
                background: "#7600dc",
                textDecoration: "none",
              }
            : { color: "#545e6f", background: "#f0f0f0" }
        }
        to={props.directTo}
      >
        <Button>{props.linkName}</Button>
      </NavLink>
    </div>
  );
};

export default MyNavlink;
