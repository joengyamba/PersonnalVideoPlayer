import React from "react";
import "./main.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const clé = "AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk";
  const fetchVideo = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${clé}`;

  useEffect(() => {
    fetch(fetchVideo)
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, []);
  console.log(videos);

  return (
    <div className="video-list">
      {videos.map((item) => (
        <Link to={`/read/${item.id}`} className="content-video" key={item.id}>
          <img src={item.snippet.thumbnails.default.url}></img>
          <div className="video-info">
            <p>{item.snippet.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}