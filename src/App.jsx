import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import VideoPlayer from "./components/Video Player/VideoPlayer";
import Dashboard from "./components/Dashboard";
import Curicullum from "./components/Curicullum/Curicullum";
import RecordedContent from "./components/Curicullum/Study Material/RecordedContent";
import TopicWise from "./components/Curicullum/Topic Wise/TopicWise";
import Pdfrender from "./components/Curicullum/Study Material/Pdfrender";
import PPTrender from "./components/Curicullum/Study Material/PPTrender";
// import Login from "./components/login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        await fetch("http://localhost:4000/dashboard", {
          method: "get",
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);
          })
        );
      } catch (error) {
        console.error("Error logging out:", error);
      }
      // try {
      //   const response = await fetch("http://localhost:4000/").then(
      //     (response) =>
      //       response.json().then((data) => {
      //         console.log(data);
      //       })
      //   );
      // .then((data) => {
      //   console.log(data);
      // console.log(response);
      // if (response.ok) {
      //   setIsLoggedIn(true);
      //   console.log("Response is ok and user is loged in");
      // }
      // } catch (error) {
      //   console.error("Error checking login status:", error);
      // }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Register onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Register onLogin={handleLogin} />
            )
          }
        />

        {/* <Route path="/" element={<Login />}>
          <Route index element={<Dashboard />} />
        </Route> */}
        {/* <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="Video/:title" element={<VideoPlayer />} />
        <Route path="Curicullum" element={<Curicullum />} />
        <Route path="Recorded" element={<RecordedContent />} />
        <Route path="TopicWise/:data" element={<TopicWise />} />
        <Route path="/notes" element={<Pdfrender />} />
        <Route path="/summary" element={<PPTrender />} />
        <Route path="/curicullum" element={<Curicullum />} />
      </Routes>
    </BrowserRouter>
  );
}
