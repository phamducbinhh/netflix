import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default Main;
