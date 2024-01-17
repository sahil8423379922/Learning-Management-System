import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import View1 from "./components/View1";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
