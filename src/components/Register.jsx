import React from "react";
import { useState } from "react";
import logo from "./loginbanner.jpg";
import styles from "./Register.module.css";
import Login from "./login";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ReactDOM from "react-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        ReactDOM.render(<Login />, document.getElementById("root"));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <div className="bg-light vh-100 ">
        <div className={styles.logb}>
          <div className="row bg-white py-4 px-5 shadow-sm p-3 rounded ">
            <div className="col pt-5">
              <img src={logo} className={styles.imgholder} />
            </div>
            <div className="col">
              <form className="py-5">
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
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={onSubmit}
                  >
                    Register
                  </button>
                </div>
                <div className="pt-1 form-text">
                  <a href="/">
                    <p>Already have Account? Login</p>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
