import React, { useEffect, useRef, useState } from "react";
//import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import "./Newmember.css";
//import { Typography } from "@material-ui/core";
//import { Grid } from "@material-ui/core";
import { useSpring, animated } from "@react-spring/web";
function Newmember() {
  //const navEmail = useNavigate();

  const memImg = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: memImg.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Newmember.json"),
    });
  }, []);
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div xs={12} sm={6} className="newmember_imgpart" ref={memImg}>
      <div className="text_container" onClick={() => toggle(!state)}>
        <animated.div
          xs={12}
          sm={6}
          className="newmember_text"
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          Welcome...❤
        </animated.div>
      </div>
    </div>
  );
}

export default Newmember;
