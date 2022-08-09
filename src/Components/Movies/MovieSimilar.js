import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import MoviesCard from "./MoviesCard";
import { API } from "../Api/ConfigApi";

const MovieSimilar = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const respones = await fetch(API.getMovieSimilar(movieId));
      const data = await respones.json();
      if (!data.results) return;
      setMovies(data.results);
    };
    getData();
  }, [movieId]);
  return (
    <div className="py-10 text-white">
      <h1 className="mb-10 text-3xl font-bold leading-relaxed text-center text-white">
        Movies Similar
      </h1>
      <div className="movies-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MoviesCard data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieSimilar;
