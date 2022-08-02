import React from "react";
import placeholder from "./avatar_placeholder.png";

function Placeholder() {
  return (
    <img
      src={placeholder}
      className="joao-card-img"
      width={180}
      height={200}
    ></img>
  );
}

export default Placeholder;
