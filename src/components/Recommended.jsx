import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setAPIData] = useState([]);
  const converter = (view) => {
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
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${
      import.meta.env.VITE_YOUTUBE_DATA_API_KEY
    }`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setAPIData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="hidden lg:block lg:basis-[31%] px-2">
      {apiData
        ? apiData.map((item, index) => (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="flex gap-2 mb-5">
              <div className="basis-[40%]">
                <img className="rounded-xl" src={item.snippet.thumbnails.medium.url} />
              </div>
              <div className="basis-[55%] ">
                <h1 className="font-semibold leading-4">{item.snippet.title.slice(0,50)}</h1>
                <p className="text-xs text-gray-700 font-light">{item.snippet.channelTitle}</p>
                <p className="text-xs text-gray-700 font-light">
                  {converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
                </p>
              </div>
              <div className="basis-[5%] cursor-pointer">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </Link>
          ))
        : ""}
    </div>
  );
};

export default Recommended;
