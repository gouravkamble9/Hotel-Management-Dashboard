import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../utils/Auth";
import { Context } from "../../utils/context";
const Login = () => {

  const {SetUser}=useContext(Context)

  const [message, SetMessage] = useState(null);
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault();
    SetMessage(null);

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);


    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };

    const req = await fetch("http://127.0.0.1:1337/api/auth/local", reqOptions);
    const res = await req.json();

    if (res.jwt && res.user) {
      setToken(res.jwt);
      const user=res?.user?.username
      SetUser(user)
      navigate("/dashboard", { replace: true });
    }

    if (res.error) {
      SetMessage(res.error.message);
      return;
    }
  };
  return (
    <div className="login-sec">
      <div className="login-container">
        <div className="left">
          <div className="login">
            <h1>Login</h1>
          </div>
          <div className="icon">
            <img src="./logo.png" alt="" />
          </div>

          <div className="login-form">
            <form onSubmit={login}>
              <div className="input-wrapper">
                <label htmlFor="identifier">Username</label>
                <input type="text" id="identifier" name="identifier" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
          <span className="alert">{message}</span>
          <Link
            to="/registration"
            style={{ textDecoration: "none", color: "black" }}
          >
            Create an Account
          </Link>
        </div>
        <div className="right">
          <div className="content">
            <div>
              <h1>Hotel Management Dashboard</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam, maxime deleniti. Facilis repudiandae natus expedita
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
