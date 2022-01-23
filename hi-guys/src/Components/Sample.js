// // import React from "react";
// // import { Wave } from "react-animated-text";
// // import { Random } from "react-animated-text";
// // function Sample() {
// //   return (
// //     <div>
// //       <Wave text="EXAMPLE TEXT" />;
// //       <Random
// //         text="EXAMPLE TEXT 👍 "
// //         effect="verticalFadeIn"
// //         effectChange={2}
// //         effectDirection="up"
// //       />
// //       ;
// //       <Wave text="EXAMPLE TEXT" effect="stretch" effectChange={2.2} />
// //     </div>
// //   );
// // }
// // export default Sample;
// import React from "react";
// import { TextField, Button } from "@material-ui/core";
// function Sample() {
//   const formRef = React.useRef();
//   return (
//     <div className="App">
//       <form ref={formRef}>
//         <TextField required label="LoftyPine" />
//         <Button
//           variant="contained"
//           onClick={() => formRef.current.reportValidity()}
//         >
//           Validate
//         </Button>
//       </form>
//     </div>
//   );
// }
// export default Sample;
// <div
//   style={{
//     height: 200,
//   }}
// >
//   <a href="./forgotpassword">Forgotpassword?</a>
// </div>;
// <div>
//   <Grid container style={{ minHeight: "100vh" }}>
//     <Grid item xs={12} sm={6}>
//       <div
//         ref={container}
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           width: "100%",
//           height: "80%",
//           objectFit: "cover",
//           paddingTop: "10%",
//           // backgroundColor: " #aa00ff",
//         }}
//       />
//     </Grid>

//     <Grid
//       className="login_content"
//       container
//       item
//       xs={12}
//       sm={6}
//       alignItems="center"
//       direction="column"
//       justifyContent="space-between"
//     >
//       <div />

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           maxWidth: 400,
//           minWidth: 300,
//           alignItems: "center",
//         }}
//       >
//         <form ref={formRef}>
//           <Grid container justifyContent="center">
//             <div xs={12} sm={6} className="login_topic">
//               <Wave text="SIGNIN"></Wave>
//             </div>
//           </Grid>
//           <TextField
//             required
//             label="Username"
//             onChange={(e) => {
//               setUsernameLog(e.target.value);
//             }}
//             value={Username}
//             margin="normal"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <TextField
//             type="password"
//             required
//             label="Password"
//             value={Password}
//             onChange={(e) => {
//               setPasswordLog(e.target.value);
//             }}
//             margin="normal"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockRounded />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <div style={{ height: 25 }} />
//           <Grid
//             container
//             item
//             xs={12}
//             sm={6}
//             //alignitems=""
//             direction="column"
//             style={{
//               alignItems: "center",
//               maxWidth: 200,
//               minWidth: 300,
//             }}
//           >
//             <Button
//               startIcon={<PersonIcon />}
//               color="primary"
//               variant="contained"
//               onClick={() => {
//                 // if (Username == "" && Password == "") {
//                 formRef.current.reportValidity();
//                 //   navigate("/newmember");
//                 // } else {
//                 //   // navigate("/newmember");
//                 //   formRef.current.reportValidity();
//                 // }
//                 navigate("/newmember");
//               }}
//               //
//             >
//               Signin
//             </Button>
//           </Grid>

//           <div style={{ height: 20 }} />
//           {/* <div style={{ height: 20 }} /> */}
//           <Grid
//             container
//             item
//             xs={12}
//             sm={6}
//             alignitems="center"
//             direction="column"
//             style={{
//               alignItems: "center",
//               maxWidth: 200,
//               minWidth: 300,
//             }}
//           >
//             <Button
//               startIcon={<PersonAdd />}
//               color="primary"
//               variant="contained"
//               onClick={() => {
//                 navigate("/signup");
//               }}
//             >
//               Signup
//             </Button>
//           </Grid>
//         </form>
//       </div>
//       <div />
//     </Grid>
//   </Grid>
// </div>;
