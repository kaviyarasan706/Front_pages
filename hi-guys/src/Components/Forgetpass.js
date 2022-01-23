import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
//import "./Forget.css";
function Forgetpass() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Forgot.json"),
    });
  }, []);
  const Navigate = useNavigate();

  const [Email, setemailForgot] = useState("");

  //const [Username, setUsernameLog] = useState("");

  //const [Password, setPasswordLog] = useState("");

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
              // backgroundColor: "#ECF0F1",
            }}
          />
        </Grid>
        <Grid
          className="login_content"
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
              maxWidth: 300,
              minWidth: 200,
            }}
          >
            <Grid container justifyContent="center">
              <div xs={12} sm={6} className="login_topic">
                <Wave text="Reset Password"></Wave>
              </div>
            </Grid>
            <div>
              <h4>Don't Worry About It! Enter Your Registered EMail</h4>
            </div>
            <TextField
              label="Email"
              type={"email"}
              value={Email}
              onChange={(e) => {
                setemailForgot(e.target.value);
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
                startIcon={<EmailRounded />}
                color="primary"
                variant="contained"
                //onChange={Signup}
                onClick={() => {
                  if (Email === "") {
                    alert("please put Your Registered Email");
                  } else {
                    Navigate("/emailsend");
                  }
                }}
              >
                Send Request
              </Button>
            </Grid>
            <div
              style={{
                height: 25,
              }}
            >
              <a href="./login">Back to Login</a>
            </div>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Forgetpass;
