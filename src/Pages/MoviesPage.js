import React, { useEffect, useState } from "react";
import { API, endPoint, keyApi } from "../Components/Api/ConfigApi";
import Loading from "../Components/Loading/Loading";
import MoviesCard from "../Components/Movies/MoviesCard";
import useDebounce from "../Hooks/useDebounce";
import { v4 } from "uuid";
const pageCount = 5;
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // //chức năng tìm kiếm
  const [query, setQuery] = React.useState("");
  //debounce
  const queryDebounce = useDebounce(query, 500);
  //loading
  const [loading, setLoading] = React.useState(true);
  //page
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (queryDebounce) {
        const respones = await fetch(API.getMoviesPage(page, queryDebounce));
        const data = await respones.json();
        setMovies(data.results);
        setLoading(false);
      } else {
        const respones = await fetch(
          `${endPoint}/popular?api_key=${keyApi}&page=${page}`
        );
        const data = await respones.json();
        setMovies(data.results);
        setLoading(false);
      }
    };
    getData();
  }, [queryDebounce, page]);

  return (
    <>
      <div className="py-10">
        <div className="flex items-center justify-center mb-10">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Movies..."
              className="p-4 w-[541px] outline-none bg-slate-800 text-white
            "
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="p-4 text-white bg-primary hover:bg-[#7D6AFF] transition duration-300">
              Search Movies
            </button>
          </div>
        </div>
        {loading && (
          <div className="grid grid-cols-4 gap-10">
            {new Array(pageCount).fill(0).map(() => (
              <Loading key={v4()} />
            ))}
          </div>
        )}
        <div className="grid grid-cols-4 gap-10 text-white outline-none">
          {!loading &&
            movies.length > 0 &&
            movies.map((item) => <MoviesCard key={item.id} data={item} />)}
        </div>

        <div className="flex items-center justify-center mt-10 text-white gap-x-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
          {new Array(pageCount).fill(0).map((_, index) => (
            <button
              key={index}
              className="inline-block px-4 py-2 leading-none transition-all duration-300 bg-white rounded-md cursor-pointer text-slate-900 hover:bg-primary hover:text-white focus-within:bg-primary focus-within:text-white"
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
