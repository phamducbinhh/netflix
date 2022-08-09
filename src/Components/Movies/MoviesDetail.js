import React from "react";
import { useFetchDetail } from "../../Hooks/useFetchData";
import { endPointImage } from "../Api/ConfigApi";
import MovieCredit from "./MovieCredit";
import MovieSimilar from "./MovieSimilar";
import MovieTrailer from "./MovieTrailer";

const MoviesDetail = () => {
const {moviesDetails} = useFetchDetail();

  return (
    <>
      <div className="w-full h-[500px] relative overflow-auto ">
        <div className="absolute inset-0 h-full mb-10 bg-black bg-opacity-50"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${endPointImage}/${moviesDetails?.backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10 ">
        <img
          src={`https://image.tmdb.org/t/p/original${moviesDetails?.poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <h1 className="mb-10 text-3xl font-bold text-center text-white ">
        {moviesDetails?.title}
      </h1>
      <div className="flex justify-center max-w-[400px] mx-auto mb-10">
        {moviesDetails?.genres.length > 0 &&
          moviesDetails?.genres.map((item) => {
            return (
              <span
                key={item.id}
                className="px-4 py-2 mx-2 border rounded-lg text-primary border-primary"
              >
                {item.name}
              </span>
            );
          })}
      </div>
      <p className="leading-relaxed text-center max-w-[600px] mx-auto text-white mb-14">
        {moviesDetails?.overview}
      </p>

      <MovieCredit />
      <MovieTrailer />
      <MovieSimilar />
    </>
  );
};

export default MoviesDetail;
