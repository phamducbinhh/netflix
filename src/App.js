import React, { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Banner from "./Components/Banner/Banner";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { DataProvider } from "./Context/ContextApi";
//dynamic import
const HomePage = lazy(() => import("./Pages/HomePage"));
const MoviesPage = lazy(() => import("./Pages/MoviesPage"));
const MoviesDetail = lazy(() => import("./Components/Movies/MoviesDetail"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <DataProvider>
          <Routes>
            <Route element={<Main />}>
              {/* trang chu */}
              <Route
                path="/home"
                element={
                  <>
                    <Banner />
                    <HomePage />
                  </>
                }
              ></Route>
              {/* trang danh sach phim */}
              <Route path="/movies" element={<MoviesPage />}></Route>
              <Route path="/movie/:movieId" element={<MoviesDetail />}></Route>
            </Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/" element={<SignIn />}></Route>
          </Routes>
        </DataProvider>
      </Suspense>
    </Fragment>
  );
};

export default App;
