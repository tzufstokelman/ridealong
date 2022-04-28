import react, { useState } from "react";
import classes from "./Login.module.css";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [dateofbirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState(null);

  const handleSignin = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <div
      style={{
        backgroundColor: "#bc986a",
        paddingTop: "12px",
        paddingBottom: "12px",
        padding: "6px",
      }}
    >
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
        <Button
          onSubmit={handleSignin}
          className={classes.Button}
          variant="contained"
          color="success"
        >
          <div className={classes.Text}>Sign In</div>
        </Button>
        <InputLabel>
          Not registered yet? <a href="google.com">Sign Up</a>
        </InputLabel>
      </form>
    </div>
  );
};

export default Login;
