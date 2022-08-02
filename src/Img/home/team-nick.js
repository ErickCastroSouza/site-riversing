import React from "react";
import team_nick from "./team-nick.jpg";

function teamNick() {
  return (
    <img
      src={team_nick}
      className="nick-card-img"
      width={180}
      height={200}
      alt="Nickolas img"
    ></img>
  );
}

export default teamNick;
