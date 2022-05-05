import react, { useState } from "react";
import classes from "./Signup.module.css";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addUser } from "../../data/data";
import TransferList from "./ChoicesForm.js";
const Signup = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [dateofbirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState(null);

  const handleSignin = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const userData = {
      email: email,
      password: password,
      gender: gender,
      dateofbirth: dateofbirth,
      username: username,
      role: "player",
    };
    await addUser(userData);
    // console.log(userData);
  };

  const handleInputChange = (e) => {
    const propertyName = e.target.id.split("-")[1];
    const inputValue = e.target.value;
    switch (propertyName) {
      case "username":
        setUsername(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "password":
        setPassword(inputValue);
        break;
      case "dateofbirth":
        setDateOfBirth(inputValue);
        break;
      case "gender":
        setGender(inputValue);
        break;
      default:
        break;
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#bc986a",
        paddingTop: "12px",
        paddingBottom: "12px",
        padding: "6px",
        display: "flex",
      }}
    >
      <form onSubmit={handleSignin} className={classes.Login}>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginLeft: "3%",
            }}
          >
            <label>Username</label>
            <TextField
              onChange={handleInputChange}
              InputProps={{ className: classes.TextBox }}
              id="filled-username-input"
              label="Enter Username"
              type="text"
              autoComplete="current-username"
              variant="standard"
            />
            <label>Email</label>
            <TextField
              onChange={handleInputChange}
              InputProps={{ className: classes.TextBox }}
              id="filled-email-input"
              label="Enter Email"
              type="email"
              autoComplete="current-email"
              variant="standard"
            />
            <label>Password</label>
            <TextField
              onChange={handleInputChange}
              InputProps={{ className: classes.TextBox }}
              id="filled-password-input"
              label="Enter Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <label>Date of birth</label>
            <TextField
              onChange={handleInputChange}
              InputProps={{ className: classes.TextBox }}
              id="filled-dateofbirth-input"
              type="date"
              autoComplete="current-date"
              variant="standard"
            />
            <label>Gender</label>
            <FormControl style={{ minWidth: "300px" }}>
              <RadioGroup
                id="filled-gender-input"
                onChange={handleInputChange}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio id="filled-gender-input1" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio id="filled-gender-input2" />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio id="filled-gender-input3" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              className={classes.Button}
              variant="contained"
              color="success"
            >
              <div className={classes.Text}>Sign Up</div>
            </Button>
          </div>
          <TransferList />
        </div>
      </form>
    </div>
  );
};

export default Signup;
