import "./App.css";
import Emailsend from "./Components/Emailsend";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Newmember from "./Components/Newmember";
import Forgetpass from "./Components/Forgetpass";
// import Sample from "./Components/Sample";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Sample from "./Components/Sample";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />}></Route>
        </Routes>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/emailsend" element={<Emailsend />} />
        </Routes>
        <Routes>
          <Route path="/newmember" element={<Newmember />} />
        </Routes>
        <Routes>
          <Route path="/forgotpassword" element={<Forgetpass />} />
        </Routes>
      </BrowserRouter>
      {/* <Sample /> */}
    </div>
  );
}

export default App;
