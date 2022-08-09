import React from "react";
import { useNavigate } from "react-router-dom";
import { endPointImage } from "../Api/ConfigApi";

const BannerItem = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-full h-full rounded-lg">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
        <img
          src={`${endPointImage}/${data.backdrop_path}`}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full text-white left-5 bottom-5">
          <h2 className="mb-5 text-3xl font-bold">{data.title}</h2>
          <div className="flex items-center mb-8 gap-x-3">
            <span className="px-4 py-2 border border-white rounded-lg">
              {data.vote_count}
            </span>
            <span className="px-4 py-2 border border-white rounded-lg">
              {data.vote_average}
            </span>
            <span className="px-4 py-2 border border-white rounded-lg">
              {new Date(data.release_date).getFullYear()}
            </span>
          </div>
          <button
            className="px-6 py-3 font-medium rounded-lg bg-primary hover:bg-[#7D6AFF] transition duration-300"
            onClick={() => navigate(`/movie/${data.id}`)}
          >
            Watch Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerItem;
