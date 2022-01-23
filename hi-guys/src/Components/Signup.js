import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
//import PersonIcon from "@material-ui/icons/Person";
import PersonAdd from "@material-ui/icons/PersonAdd";
import { AccountCircle, EmailRounded, LockRounded } from "@material-ui/icons";
import lottie from "lottie-web";
import { Random, Wave } from "react-animated-text";
import "./Signup.css";
function Signup() {
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
  const nav = useNavigate();

  const [Email, setemailReg] = useState("");

  const [Username, setUsernameReg] = useState("");

  const [Password, setPasswordReg] = useState("");

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
              //backgroundColor: " #aa00ff",
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
              // backgroundColor: "#ECF0F1",
            }}
          >
            <Grid container justifyContent="center">
              <div xs={12} sm={6} className="signup_topic">
                <Wave text="Create An Account"></Wave>
              </div>
            </Grid>
            <TextField
              label="Email"
              type={"email"}
              value={Email}
              onChange={(e) => {
                setemailReg(e.target.value);
              }}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRounded />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Username"
              onChange={(e) => {
                setUsernameReg(e.target.value);
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
                setPasswordReg(e.target.value);
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
                startIcon={<PersonAdd />}
                color="primary"
                variant="contained"
                onChange={Signup}
                onClick={() => {
                  if (Username === "") {
                    //formRef.current.reportValidity();
                    //navigate("/newmember");
                    alert(" Please put Your UserName");
                  } else if (Password === "") {
                    alert("Please put Your Password");
                  } else if (Email === "Please put your Email") {
                  } else {
                    // navigate("/newmember");
                    //   formRef.current.reportValidity();
                    nav("/emailsend");
                  }
                }}
              >
                Signup
              </Button>
            </Grid>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
