import React from "react"
import { Route, Routes } from "react-router-dom";

import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}
