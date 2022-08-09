import React, { Fragment } from "react";
import { useFetchMovieWatch } from "../../Hooks/useFetchData";

const MovieTrailer = () => {
  const { movies, movieId } = useFetchMovieWatch();
  return (
    <div className="py-10">
      <h1 className="mb-10 text-3xl font-bold leading-relaxed text-center text-white">
        Watch Movies
      </h1>
      <div className="max-w-[800px] mx-auto mb-3 text-center">
        {movies.length > 0 &&
          movies.slice(0, 1).map((item) => (
            <Fragment>
              <iframe
                key={item.key}
                id="ve-iframe"
                src={`https://2embed.org/embed/${movieId}?autoplay=1`}
                width="100%"
                height="100%"
                allowFullscreen="allowfullscreen"
                frameBorder="0"
                title="Video Player"
                className=" aspect-video"
              ></iframe>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default MovieTrailer;
