import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Random, Wave } from "react-animated-text";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PersonAdd from "@material-ui/icons/PersonAdd";
import { AccountCircle, Email, LockRounded } from "@material-ui/icons";
import lottie from "lottie-web";
import "./Login.css";
//import { useSpring, animated } from "@react-spring/web";
function Login() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Login_img.json"),
    });
  }, []);

  const navigate = useNavigate();

  const [Username, setUsernameLog] = useState("");

  const [Password, setPasswordLog] = useState("");
  const formRef = React.useRef();

  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            backgroundColor: "#ECF0F1",
          }}
        >
          <div
            className="container"
            ref={container}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "80%",
              objectFit: "cover",
              paddingTop: "10%",
              //backgroundColor: "#ECF0F1",",
            }}
          />
        </Grid>
        <Grid
          className="signup_content"
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{
            backgroundColor: "#ECF0F1",
            //paddingBottom: "10%",
          }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justifyContent="center">
              <div xs={12} sm={6} className="login_topic">
                <Wave text="Login To Ur Account"></Wave>
              </div>
            </Grid>

            <TextField
              label="Username"
              onChange={(e) => {
                setUsernameLog(e.target.value);
              }}
              value={Username}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              type="password"
              label="Password"
              value={Password}
              onChange={(e) => {
                setPasswordLog(e.target.value);
              }}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 25 }} />
            <Grid
              container
              item
              xs={12}
              sm={6}
              alignitems="left"
              direction="column"
              style={{
                alignItems: "center",
                maxWidth: 200,
                minWidth: 300,
              }}
            >
              <Button
                startIcon={<PersonIcon />}
                color="primary"
                variant="contained"
                onClick={() => {
                  if (Username === "") {
                    //formRef.current.reportValidity();
                    //navigate("/newmember");
                    alert(" Please Put your UserName");
                  } else if (Password === "") {
                    alert(" Please Put your Password");
                  } else {
                    // navigate("/newmember");
                    //   formRef.current.reportValidity();
                    navigate("/newmember");
                  }
                }}
                //
              >
                Signin
              </Button>
              <div style={{ height: 25 }} />
              <Button
                startIcon={<PersonAdd />}
                color="primary"
                variant="contained"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </Button>
            </Grid>
            <div
              style={{
                height: 25,
              }}
            >
              <a href="./forgotpassword">Forgotpassword?</a>
            </div>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
