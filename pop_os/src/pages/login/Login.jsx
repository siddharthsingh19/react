import { ChevronLeft } from "@mui/icons-material";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [loginBoxDisplay1, setLoginBoxDisplay1] = useState("flex");
  const [loginBoxDisplay2, setLoginBoxDisplay2] = useState("none");

  const toggle = () => {};

  return (
    <div className="login">
      <div className="login--wrapper">
        <div
          className="login--box1"
          style={{ display: loginBoxDisplay1 }}
          onClick={() => {
            setLoginBoxDisplay1("none");
            setLoginBoxDisplay2("flex");
          }}
        >
          <div className="login--userImg1"></div>
          <p className="login--username">Honey</p>
        </div>
        <div className="login--box2" style={{ display: loginBoxDisplay2 }}>
          <div className="login--userImg2"></div>
          <p className="login--username">Honey</p>
          <div className="login--passwordBox">
            <div
              className="login--back"
              onClick={() => {
                setLoginBoxDisplay1("flex");
                setLoginBoxDisplay2("none");
              }}
            >
              <ChevronLeft sx={{ color: "orange" }} />
            </div>
            <input
              type="password"
              className="login--password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
