import React from "react";
import "./Home.css";
import tomato from "../assets/tomato.jpg";
import lettuce from "../assets/lettuce.jpg";
import redPepper from "../assets/red-pepper.jpg";
import greenPepper from "../assets/green-pepper.jpg";

function Home() {
  return (
    <div className="Home">
      <h1>Amber Farm Fresh</h1>
      <p>Fresh produce directly from our farm to your table.</p>
      <div className="gallery">
        <img src={tomato} alt="Tomato" />
        <img src={lettuce} alt="Lettuce" />
        <img src={redPepper} alt="Red Pepper" />
        <img src={greenPepper} alt="Green Pepper" />
      </div>
    </div>
  );
}

export default Home;
