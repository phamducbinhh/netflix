/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/FireBase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/ContextApi";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      }
    });
  }, [userInfo]);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <>
      <header className="flex items-center justify-between py-10 mb-10 text-white header gap-x-5">
        <div className="flex justify-end w-[55%]">
          {" "}
          <NavLink
            to={"/home"}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            style={{ marginRight: "10px" }}
          >
            Home
          </NavLink>
          <NavLink
            to={"/movies"}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Movies
          </NavLink>
        </div>
        <div className="flex flex-col items-center mr-3">
          <button
            className="px-4 py-2 mb-2 text-sm transition duration-300 rounded bg-primary hover:bg-secondary"
            onClick={handleLogout}
          >
            Log Out
          </button>
          <div >
            {" "}
            <span className="block text-sm text-secondary">
              {userInfo?.displayName}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
