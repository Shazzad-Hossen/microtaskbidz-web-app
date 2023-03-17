import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


const Home = () => {
  return (
    <div>
      <Header isShow={false}></Header>
      <h1 className="my-6 text-center text-3xl font-bold">Welcome to React</h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
