import react from "react";
import classes from "./Login.module.css";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button";
import { margin } from "@mui/system";
const Login = () => {
  return (
    <div>
      <form className={classes.Login}>
        <TextField
          InputProps={{ className: classes.TextBox }}
          id="filled-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          variant="standard"
        />
        <TextField
          InputProps={{ className: classes.TextBox }}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <Button className={classes.Button} variant="contained" color="success">
          <div className={classes.Text}>Sign In</div>
        </Button>
      </form>
    </div>
  );
};

export default Login;
