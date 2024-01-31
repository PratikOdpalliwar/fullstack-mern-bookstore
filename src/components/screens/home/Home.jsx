import React from "react";
import Cards from "../../cards/Cards";
import Carausel from "../../carousel/Carausel";

const Home = () => {
  return (
    <div>
      <div>
        <Carausel />
      </div>

      <div
        className="m-5 container"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",
      justifyContent:"center"}}
      >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
