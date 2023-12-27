import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './Todos';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>홈페이지</div>;

export default function App() {
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/" />
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  </Router>;
}
