/* Author: Steven Jaramillo*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Home/Banner";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
