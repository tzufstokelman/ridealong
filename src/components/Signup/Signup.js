import react from "react";
import classes from "./Signup.module.css";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TransferList from "./ChoicesForm.js";
const Signup = () => {
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
      <form className={classes.Login}>
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
              InputProps={{ className: classes.TextBox }}
              id="filled-username-input"
              label="Enter Username"
              type="text"
              autoComplete="current-username"
              variant="standard"
            />
            <label>Email</label>
            <TextField
              InputProps={{ className: classes.TextBox }}
              id="filled-email-input"
              label="Enter Email"
              type="email"
              autoComplete="current-email"
              variant="standard"
            />
            <label>Password</label>
            <TextField
              InputProps={{ className: classes.TextBox }}
              id="filled-password-input"
              label="Enter Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <label>Date of birth</label>
            <TextField
              InputProps={{ className: classes.TextBox }}
              id="filled-age-input"
              // label="Enter Date of birth"
              type="date"
              autoComplete="current-date"
              variant="standard"
            />
            <label>Gender</label>
            <FormControl style={{ minWidth: "300px" }}>
              {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <Button
              className={classes.Button}
              variant="contained"
              color="success"
            >
              <div className={classes.Text}>Sign In</div>
            </Button>
          </div>
          <TransferList />
        </div>
      </form>
    </div>
  );
};

export default Signup;
