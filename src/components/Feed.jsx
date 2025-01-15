import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feed = ({ sidebar, category }) => {
  const [data, setData] = useState([]);

  const viewConverter = (view) => {
    if (view >= 1000000000) {
      return Math.round(view / 1000000000) + "B";
    } else if (view >= 1000000) {
      return Math.round(view / 1000000) + "M";
    } else if (view >= 1000) {
      return Math.round(view / 1000) + "K";
    } else {
      return view;
    }
  };

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${
      import.meta.env.VITE_YOUTUBE_DATA_API_KEY
    }`;
    await fetch(videoList_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchData();  
  }, [category]);

  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-x-4 gap-y-8`}
    >
      {data.map((item, index) => (
        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`}>
          <img
            src={item.snippet.thumbnails.medium.url}
            className="rounded-xl w-full"
          />
          <h2 className="mt-2.5 text-lg font-medium">{item.snippet.title}</h2>
          <h3 className="text-[#555]">{item.snippet.channelTitle}</h3>
          <p className="text-[#555]">
            {viewConverter(item.statistics.viewCount)} views &bull;{" "}
            {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
