import { Typography } from "@material-ui/core";
import React from "react";

function Card2() {
  return (
    <main className="flex flex-col md:flex-row ">
      <div class=" py-8 px-8 max-w-sm mx-auto bg-white rounded rounded m-8 p-8 shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
        <div class="text-center space-y-2 sm:text-left">
          <h3 className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ">
            About us
          </h3>
          <div class="space-y-0.5">
            <p>OUR MISSION</p>
            <Typography className="py-4 flex justify-center">
              To empower our clients to achieve their business objectives
              through the integrated use of sustainable ICT solutions. Ultronic
              Software Developers is committed to providing only the highest
              quality and most professional websites with an individual creative
              touch to set your business ahead of the competition. At Ultronic
              Software Developers we believe in total customer satisfaction. We
              provide extensive customer service, ensuring your satisfaction
              with the design, functionality, and the results you get from your
              site. More importantly, people will find your Web site to be
              professionally produced, useful and enjoyable, prompting them to
              visit again and again
            </Typography>
          </div>
        </div>
      </div>

      {/**Card 3 */}
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded rounded m-8 p-8 shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div class="text-center space-y-2 sm:text-left">
          <h3 className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ">
            About us
          </h3>
          <div class="space-y-0.5">
            <p>OUR VALUE</p>
            <Typography className="py-4 flex justify-cent">
              We specialize in creating applications that adopt well to iPhone
              and Android platforms. These applications are well tested and
              adhere to the strongest scales of quality. Our company has in fact
              completed a number of mobile-application-development projects, in
              the shortest span of time for well-know Uganda,and International
              brands. The attributes of quality, originality and client
              satisfaction matter the most to us. The thoughts emerge in the
              minds of our clients, and they come to reality with the work of
              Ultronic Software Developers Co., Ltd. If you choose our company
              to develop your project you won’t lose! Our pricing policy is not
              only reasonable, but also flexible.
            </Typography>
          </div>
        </div>
      </div>

      {/**Card4 */}
      <div class=" py-8 px-8 max-w-sm mx-auto bg-white rounded rounded m-8 p-8 shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <div class="text-center space-y-2 sm:text-left">
          <h3 className="decoration-clone bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ">
            About us
          </h3>
          <div class="space-y-0.5">
            <p>OUR GOAL</p>
            <Typography className="py-4 flex justify-center">
              We specialize in creating applications that adopt well to iPhone
              and Android platforms. These applications are well tested and
              adhere to the strongest scales of quality. Our company has in fact
              completed a number of mobile-application-development projects, in
              the shortest span of time for well-know Uganda,and International
              brands. The attributes of quality, originality and client
              satisfaction matter the most to us. The thoughts emerge in the
              minds of our clients, and they come to reality with the work of
              Ultronic Software Developers Co., Ltd. If you choose our company
              to develop your project you won’t lose! Our pricing policy is not
              only reasonable, but also flexible.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card2;
