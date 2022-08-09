import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endPointImage, API } from "../Api/ConfigApi";

const MovieCredit = () => {
  const { movieId } = useParams();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const respones = await fetch(API.getMovieCredit(movieId));
      const data = await respones.json();
      if (!data.cast) return;
      setMovies(data.cast);
    };
    getData();
  }, [movieId]);
  return (
    <div className="py-10">
      <h1 className="mb-3 text-3xl font-bold leading-relaxed text-center text-white">
        Cast
      </h1>
      <div className="grid grid-cols-4 gap-5 mb-3">
        {movies.slice(0, 4).map((item) => (
          <div className="mb-5 cast-item" key={item.id}>
            <img
              src={`${endPointImage}/${item?.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-medium text-center text-white">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredit;
