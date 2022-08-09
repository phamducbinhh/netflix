import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../Components/Api/ConfigApi";

const useFetchData = (type) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const respones = await fetch(API.getMovieList(type));
      const data = await respones.json();
      if (!data.results) return;
      setMovies(data.results);
    };
    getData();
  }, [type]);
  return {
    movies,
  };
};

export const useFetchDetail = () => {
  const { movieId } = useParams();
  const [moviesDetails, setMoviesDetail] = React.useState();

  useEffect(() => {
    const getMoviesDetail = async () => {
      const respones = await fetch(API.getMovieDetail(movieId));
      const data = await respones.json();
      if (!data) return;
      setMoviesDetail(data);
    };
    getMoviesDetail();
  }, [movieId]);
  return {
    moviesDetails,
  };
};
export const useFetchCredit = () => {
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
  return {
    movies,
  };
};
export const useFetchSimilar = () => {
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
  return {
    movies,
  };
};
export const useFetchMovieWatch = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const respones = await fetch(API.getMovieTrailer(movieId));
      const data = await respones.json();
      if (!data.results) return;
      setMovies(data.results);
    };
    getData();
  }, [movieId]);
  return {
    movies,
    movieId,
  };
};

export default useFetchData;
