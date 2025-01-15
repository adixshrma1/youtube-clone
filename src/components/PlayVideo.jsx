import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setAPIData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const fetchData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=1&key=${
      import.meta.env.VITE_YOUTUBE_DATA_API_KEY
    }`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setAPIData(data.items[0]));
  };
  const fetchCommentData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=42&videoId=${videoId}&key=${
      import.meta.env.VITE_YOUTUBE_DATA_API_KEY
    }`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };
  const fetchChannelData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
      apiData?.snippet?.channelId
    }&key=${import.meta.env.VITE_YOUTUBE_DATA_API_KEY}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };
  useEffect(() => {
    fetchData();
    fetchCommentData();
  }, [videoId]);
  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  const converter = (view) => {
    if (view >= 1000000) {
      return Math.round(view / 1000000) + "M";
    } else if (view >= 1000) {
      return Math.round(view / 1000) + "K";
    } else {
      return view;
    }
  };
  return (
    <div className="basis-full lg:basis-[69%] px-2">
      <div className="h-[250px] md:h-[500px]">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="text-2xl font-semibold my-3">
        {apiData ? apiData.snippet.title : "Video Title"}
      </h3>
      <div className="flex flex-wrap items-center justify-between">
        <div className=" flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <img
              className="w-12 rounded-full"
              src={
                channelData ? channelData.snippet.thumbnails.default.url : ""
              }
            />
            <div>
              <p className="text-lg font-semibold">
                {apiData ? apiData.snippet.channelTitle : "Channel Title"}
              </p>
              <p className="text-sm text-[#5a5a5a]">
                {channelData
                  ? converter(channelData.statistics.subscriberCount)
                  : "000"}{" "}
                subscribers
              </p>
            </div>
          </div>
          <button className="bg-black text-white font-semibold py-2 px-3.5 rounded-full">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#f2f2f2] py-2 px-4 rounded-full">
            <img className="w-6" src={assets.likeIcon} />
            <p>{apiData ? converter(apiData.statistics.likeCount) : "0"}</p>
            <div className="w-[1px] h-5 bg-gray-700"></div>
            <img className="w-6" src={assets.dislikeIcon} />
          </div>
          <button className="flex items-center bg-[#f2f2f2] py-2 px-4 rounded-full">
            <img className="w-6" src={assets.shareIcon} /> Share
          </button>
          <button className="flex items-center bg-[#f2f2f2] py-2 px-4 rounded-full">
            <img className="w-6" src={assets.saveIcon} /> Save
          </button>
        </div>
      </div>
      <div className="my-3 bg-[#f2f2f2] p-2 rounded-xl">
        <h1 className="font-semibold">
          {apiData
            ? Number(apiData.statistics.viewCount).toLocaleString("en-US")
            : "0"}{" "}
          views {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </h1>
        <br />
        <p className="text-[#2d2d2d]">
          {apiData ? apiData.snippet.description.slice(0, 100) : "Description"}{" "}
          <span className="font-semibold cursor-pointer">...more</span>
        </p>
      </div>

      {/* video comments */}
      <div>
        <h4 className="text-2xl font-semibold">
          {apiData
            ? Number(apiData.statistics.commentCount).toLocaleString("en-US")
            : ""}{" "}
          comments
        </h4>
        {commentData
          ? commentData.map((item, index) => (
              <div key={index} className="my-5 overflow-hidden flex items-start gap-3">
                <img
                  className="w-12 rounded-full"
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                />
                <div className="">
                  <h3 className="font-semibold">
                    {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                    <span className="text-gray-700 text-xs font-light">
                      {moment(
                        item.snippet.topLevelComment.snippet.publishedAt
                      ).fromNow()}
                    </span>
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {item.snippet.topLevelComment.snippet.textOriginal.slice(
                      0,
                      400
                    )}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <img className="w-6" src={assets.likeIcon} />
                    <p className="text-sm">
                      {converter(
                        item.snippet.topLevelComment.snippet.likeCount
                      )}
                    </p>
                    <img className="w-6" src={assets.dislikeIcon} />
                  </div>
                </div>
              </div>
            ))
          : "no comment"}
      </div>
    </div>
  );
};

export default PlayVideo;
