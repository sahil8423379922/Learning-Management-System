import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import VideoPlayer from "./components/Video Player/VideoPlayer";
import Dashboard from "./components/Dashboard";
import Curicullum from "./components/Curicullum/Curicullum";
import RecordedContent from "./components/Curicullum/Study Material/RecordedContent";
import TopicWise from "./components/Curicullum/Topic Wise/TopicWise";

export default function App() {
  const [data, setData] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="Register" element={<Register />} />
        <Route path="Video/:title" element={<VideoPlayer />} />
        <Route path="Curicullum" element={<Curicullum />} />
        <Route path="Recorded" element={<RecordedContent />} />
        <Route path="TopicWise/:title" element={<TopicWise />} />
      </Routes>
    </BrowserRouter>
  );
}
