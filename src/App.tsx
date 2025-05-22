import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
