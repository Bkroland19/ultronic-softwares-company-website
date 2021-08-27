import React from "react";
import { Typography } from "@material-ui/core";

function Card2() {
  return (
    <div class="py-8 px-8 max-w-sm mx-auto bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div>
        <div className="bg-gradient-to-b from-gray-500 to-white-400 text-transparent">
          <p>DEVELOPERS</p>
        </div>
        <h2 className="font-extrabold text-purple-600	">WORD FROM CEO</h2>
        <Typography className="text-white">
          To enhance efficiency and optimization, through automation of business
          processes, by use of technological solutions.
        </Typography>
      </div>
    </div>
  );
}

export default Card2;
