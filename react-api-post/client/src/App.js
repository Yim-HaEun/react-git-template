import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherSearch() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const API_KEY = '4edac2eabf494946a189e86050976521';

  const searchWeather = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`
      );
      // api에서 데이터를 get으로 가지고 왔다면
      // post를 이용해서 바로 db에 넣어버림
      //response.data : 필수로 데이터를 불러오기 위한 작업
      //.data[0] : 검색했을 때 제일 첫 번 째로 나오는 데이터를
      //가지고 오기 위해서 사용하는 이름
      await axios.post('http://localhost:5000/api/saveWeatherData', {
        city_name: response.data.data[0].city_name,
        temp: response.data.data[0].temp,
        rh: response.data.data[0].rh,
        description: response.data.data[0].weather.description,
      });

      setWeather(response.data.data[0]);
    } catch (error) {
      console.error('날씨를 가져올 수 없습니다.:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">날씨</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="도시를 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={searchWeather}>
          검색
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {weather.city_name && (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{weather.city_name}</h2>
            <p className="card-text">온도: {weather.temp} °C</p>
            <p className="card-text">습도: {weather.rh}%</p>
            <p className="card-text">날씨: {weather.weather.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherSearch;
