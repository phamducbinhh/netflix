/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MoviesCard from "./MoviesCard";
import PropTypes from "prop-types";
import useFetchData from "../../Hooks/useFetchData";

const MoviesList = ({ type }) => {
  //custom hook
  const { movies } = useFetchData(type);
  return (
    <>
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
    </>
  );
};
MoviesList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MoviesList;
