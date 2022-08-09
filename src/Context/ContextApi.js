import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/FireBase";

const { createContext, useState, useEffect, useContext } = require("react");

// khởi tạo useContext
export const DataContext = createContext();

const DataProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const values = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);

  return (
    <DataContext.Provider value={values} {...props}></DataContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(DataContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export { DataProvider, useAuth };
