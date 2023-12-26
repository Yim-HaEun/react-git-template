import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cafes, setCafes] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5003/api/cafes')
      .then((response) => setCafes(response.data))
      .catch((error) => console.error('에러가 발생했습니다.', error));
  }, []);

  return (
    <div>
      <h1>CAFE MENU</h1>
      <ul>
        <li>
          {cafes.map((cafe) => (
            <li key={cafe.ID}>
              {cafe.NAME}
              {cafe.PRICE}
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default App;
