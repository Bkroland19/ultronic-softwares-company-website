import React from "react";
import { Typography } from "@material-ui/core";

function Card() {
  return (
    <div class="py-8 px-8 max-w-sm mx-auto bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500  shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 ">
      <div>
        <div className="bg-gradient-to-b from-gray-500 to-white-400 text-transparent">
          <p>DEVELOPERS</p>
        </div>
        <h2 className="font-extrabold text-purple-600	">OUR MISSION</h2>
        <Typography className="text-white">
          {" "}
          To empower our clients to achieve their business objectives through
          the integrated use of sustainable ICT solutions.
        </Typography>
      </div>
    </div>
  );
}

export default Card;
