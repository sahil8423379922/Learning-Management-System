import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import VideoPlayer from "./components/Video Player/VideoPlayer";
import Dashboard from "./components/Dashboard";
import Curicullum from "./components/Curicullum/Curicullum";
import RecordedContent from "./components/Curicullum/Study Material/RecordedContent";
import TopicWise from "./components/Curicullum/Topic Wise/TopicWise";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
        </Route> */}

        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="Register" element={<Register />} />
        <Route path="Video/:title" element={<VideoPlayer />} />
        <Route path="Curicullum" element={<Curicullum />} />
        <Route path="Recorded" element={<RecordedContent />} />
        <Route path="TopicWise/:data" element={<TopicWise />} />
      </Routes>
    </BrowserRouter>
  );
}
