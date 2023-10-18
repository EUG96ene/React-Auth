import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
    <div className="form-box">
        <h1 id="title">Sign In</h1>

        <form action="POST">
        <div className="input-group">
        <div className="input-field"><i className="fa-solid fa-envelope"></i><input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" /></div>
        <div className="input-field"><i className="fa-solid fa-lock"></i> <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /></div>
        <div className="btn-field">
        <button type="Submit" onClick={submit} />
        </div>
        </div>
        </form>

  
        <Link to="/signup">Signup </Link>

    </div>
    </div>
    
)
}
export default Login;