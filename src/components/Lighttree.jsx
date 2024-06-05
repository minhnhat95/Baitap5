import React from "react";
import "./Lighttree.css";
import { useState } from "react";
const Lighttree = () => {
  const [light, setLight] = useState({
    color: "red",
    index: 1,
  });
  const handleClick = () => {
    switch (light.color) {
      case "red":
        setLight({
          color: "yellow",
          index: 2,
        });
        break;
      case "yellow":
        setLight({
          color: "blue",
          index: 3,
        });
        break;
      default:
        setLight({
          color: "red",
          index: 1,
        });
        break;
    }
  };
  return (
    <div className="lightTree">
      <div className={`item ${light.index === 1 ? light.color : ``}`}></div>
      <div className={`item ${light.index === 2 ? light.color : ``}`}></div>
      <div className={`item ${light.index === 3 ? light.color : ``}`}></div>
      <button onClick={handleClick}>Switch</button>
    </div>
  );
};

export default Lighttree;
