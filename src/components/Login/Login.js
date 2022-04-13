import react from "react";
import classes from "./Login.module.css";
import TextField from "@mui/material/TextField/TextField";
const Login = () => {
  return (
    <div className={classes.Login}>
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
      />
    </div>
  );
};

export default Login;
