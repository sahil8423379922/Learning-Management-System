import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import logo from "./loginbanner.jpg";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import ReactDOM, { render } from "react-dom";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonclick, setstate] = useState(true);

  const onLogin = (e) => {
    e.preventDefault();
    setstate(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        ReactDOM.render(<Dashboard />, document.getElementById("root"));
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div className="bg-light vh-100 ">
        {buttonclick ? (
          <div>
            <div className={styles.logb}>
              <div className="row bg-white py-4 px-5 shadow-sm p-3 rounded ">
                <div className="col pt-5">
                  <img src={logo} className={styles.imgholder} />
                </div>
                <div className="col">
                  <form className="py-5">
                    <div>
                      <p className={styles.logtext}>Sign in to your Account</p>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
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
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
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
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={onLogin}
                      >
                        Login
                      </button>
                    </div>
                    <div className="pt-1 form-text">
                      <Link to="/register">
                        <p>Not have Account? Register</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.logb}>
            <ShimmerSimpleGallery
              imageType="circular"
              imageHeight={100}
              caption
            />
            <ShimmerSimpleGallery
              imageType="thumbnail"
              imageHeight={100}
              caption
            />
          </div>
        )}
      </div>
    </>
  );
}
