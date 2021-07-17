import { Typography } from "@material-ui/core";
import React from "react";
import Card2 from "./Card2";

function Card() {
  return (
    <main className="items-center">
      <div className="bg-white shadow-lg rounded m-8 p-8 flex md:bg-orange animate-pulse sm:animate-none ">
        <div className="">
          <img
            className="float-left"
            src="https://neconnected.co.uk/wp-content/uploads/2019/08/business-software.jpg"
            alt="image"
            height="800"
            width="500"
          />
        </div>
        <div className="sm:w-2/3">
          <h3 className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ">
            About us
          </h3>

          <h3 className="text-gray-400 text-xl font-semibold py-4 px-5 ">
            ULTRONIC SOFTWARE DEVELOPERS UGANDA LIMITED
          </h3>

          <Typography className="py-4 flex justify-cent">
            We specialize in creating applications that adopt well to iPhone and
            Android platforms. These applications are well tested and adhere to
            the strongest scales of quality. Our company has in fact completed a
            number of mobile-application-development projects, in the shortest
            span of time for well-know Uganda,and International brands. The
            attributes of quality, originality and client satisfaction matter
            the most to us. The thoughts emerge in the minds of our clients, and
            they come to reality with the work of Ultronic Software Developers
            Co., Ltd. If you choose our company to develop your project you
            won’t lose! Our pricing policy is not only reasonable, but also
            flexible.
          </Typography>

          <h3 className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ">
            We
          </h3>
        </div>
      </div>

      {/**New Card */}

      <Card2 />
    </main>
  );
}

export default Card;
