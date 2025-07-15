import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { log } from "./logging.js";

function ShortenerPage() {
  return <div>Shortener Page (to be implemented)</div>;
}

function StatsPage() {
  return <div>Statistics Page (to be implemented)</div>;
}

function RedirectHandler() {
  return <div>Redirect Handler (to be implemented)</div>;
}

function App() {
  useEffect(() => {
    log("App", "info", "frontend", "App loaded");
  }, []);
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<ShortenerPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path=":shortcode" element={<RedirectHandler />} />
    </Routes>
  );
}

export default App;
