import React from "react";
import MoviesList from "../Components/Movies/MoviesList";

const HomePage = () => {
  return (
    <>
      <section className="pb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold capitalize">Now Playing</h2>
        <MoviesList type="now_playing" />
      </section>
      <section className="pb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold capitalize">Top Rated</h2>
        <MoviesList type="top_rated" />
      </section>
      <section className="pb-20 text-white movies-layout page-container">
        <h2 className="mb-10 text-2xl font-bold capitalize">Up Coming</h2>
        <MoviesList type="upcoming" />
      </section>
    </>
  );
};

export default HomePage;
