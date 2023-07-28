import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import Carchosen from "./comps/Carchosen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";

function Index() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="carschosen/:id" element={<Carchosen />} />
    </Routes>
  </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

