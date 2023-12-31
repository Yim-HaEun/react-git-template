import React, { useState, useEffect } from 'react';
import axios from 'axios';
//npm i axios

const API_KEY = 'AIzaSyA9kDKNe3WHq8B-QS-agcv9i8L63XItHkM';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

const YTBAPI = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: API_KEY,
            q: 'react',
          },
        });
        setVideos(response.data.items);
      } catch (err) {
        console.error('에러입니다.', err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>유튜브 비디오 리스트</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt="video Thumbnail"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default YTBAPI;
