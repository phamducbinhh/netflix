/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MoviesCard from "./MoviesCard";
import { API } from "../Api/ConfigApi";
import PropTypes from "prop-types";

const MoviesList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const respones = await fetch(API.getMovieList(type));
      const data = await respones.json();
      if (!data.results) return;
      setMovies(data.results);
    };
    getData();
  }, []);

  return (
    <>
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
    </>
  );
};
MoviesList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MoviesList;
