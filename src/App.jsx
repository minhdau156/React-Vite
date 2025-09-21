import "./App.css";

import "./components/todo/todo.css";

import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { getUserAccount } from "./services/api.service";

import { useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";

import { Spin } from "antd";
const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const res = await getUserAccount();
      if (res.data) {
        //success
        const user = {
          email: res.data.email,
          phone: res.data.phone,
          fullName: res.data.fullName,
          role: res.data.role,
          avatar: res.data.avatar,
          id: res.data.id,
        };
        setUser(user);
        setIsAppLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsAppLoading(false);
    }
  };
  return (
    <>
      {isAppLoading === true ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
