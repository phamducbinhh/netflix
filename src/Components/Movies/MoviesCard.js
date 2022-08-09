import React from "react";
import { useNavigate } from "react-router-dom";
import { endPointImage } from "../Api/ConfigApi";
import PropTypes from "prop-types";
const MoviesCard = ({ data }) => {
  const navigate = useNavigate();

  //ham xu ly click vao phim
  const handleNavigation = () => {
    navigate(`/movie/${data?.id}`);
  };
  return (
    <>
      <div className="flex flex-col p-3 rounded-lg movies-card bg-slate-800">
        <img
          src={`${endPointImage}/${data?.poster_path}` || `${endPointImage}/${data?.backdrop_path}`}
          alt=""
          className="w-full h-[250px] object-cover rounded-lg mb-5 select-none"
        />
        <h3 className="mb-3 font-bold select-none text-md">{data?.title}</h3>
        <div className="flex items-center justify-between mb-8 text-sm opacity-50 select-none">
          <span>{new Date(data?.release_date).getFullYear()}</span>
          <span>{data?.vote_average}</span>
        </div>
        <button
          className="w-full px-6 py-3 mt-auto font-bold capitalize rounded-lg select-none bg-secondary hover:bg-[#7D6AFF] transition duration-300"
          onClick={handleNavigation}
        >
          Watch Now
        </button>
      </div>
    </>
  );
};
MoviesCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default MoviesCard;
