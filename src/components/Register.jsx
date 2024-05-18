import React, { useState } from "react";
import logo from "./loginbanner.jpg";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import login from "../../../LMSBackend/auth/login";

export default function Register({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginstate, setloginstate] = useState(true);
  // const history = useNavigate();

  const sendDataToNode = async (email, password) => {
    const response = fetch("http://localhost:4000/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Send email and password instead of data
    }).then((response) =>
      response.json().then((data) => {
        onLogin();
        console.log(data);
      })
    );

    // const data = await response.json();
    // if (response.ok) {
    //   onLogin();
    // } else {
    //   console.error(data.message);
    // }

    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);

    //   if (data.message == "true") {
    //     setloginstate(true);
    //     history("/dashboard", { loginstate });
    //   } else {
    //     setloginstate(false);
    //     history("/register");
    //   }

    //   // setloginstate(data.message);
    // });

    // if (loginstate == "true") {
    //   <Dashboard />;
    // } else {
    // }
    // Handle response as needed

    //   fetch("http://localhost:5000/api/login", {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent default form submission behavior
    sendDataToNode(email, password); // Call sendDataToNode function when the form is submitted
  };

  return (
    <>
      <div className="bg-light vh-100 ">
        <div className={styles.logb}>
          <div className="row bg-white py-4 px-5 shadow-sm p-3 rounded ">
            <div className="col pt-5">
              <img src={logo} className={styles.imgholder} alt="Logo" />
            </div>
            <div className="col">
              <form className="py-5" onSubmit={handleSubmit}>
                <div>
                  <p className={styles.logtext}>Register to Open Account</p>
                </div>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email ID
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                  <div id="emailHelp" className="form-text">
                    Enter the Email or Registered Mobile Number.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
                <div className="pt-1 form-text">
                  <Link to="/">
                    <p>Already have Account? Login</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
