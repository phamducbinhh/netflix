import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MoviesCard from "./MoviesCard";
import { useFetchSimilar } from "../../Hooks/useFetchData";

const MovieSimilar = () => {
  const { movies } = useFetchSimilar();
  return (
    <div className="py-10 text-white">
      <h1 className="mb-10 text-3xl font-bold leading-relaxed text-center text-white">
        Movies Similar
      </h1>
      <div className="movie-list">
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
