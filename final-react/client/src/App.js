/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import MovieList from './Component/Movie/MovieList';
import NumberGuessingGame from './Game/NumberGuessingGame';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div ClassName="Container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/numberGuessingGame"
              element={<NumberGuessingGame />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function AppCafe() {
  const [cafes, setCafes] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5006/api/cafen')
      .then((response) => setCafes(response.data))
      .catch((error) => console.error('에러입니다.', error));
  });
  return (
    <div>
      <h1>카페 메뉴</h1>
      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.ID}>
            {cafe.NAME} - {cafe.PRICE}원
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AppCafe;

/*key={cafe[0] = key{cafe.ID}}
        cafe[1] = cafe.NAME
        cafe[2] = cafe.PRICE */
