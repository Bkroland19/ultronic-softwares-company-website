import { Typography } from "@material-ui/core";
import React from "react";

function Content() {
  return (
    <div className="flex flex-col shadow-md">
      <div className="bg-gradient-to-b from-gray-500 to-white-400 text-transparent">
        <p>DEVELOPERS</p>
      </div>
      <h2 className="flex text-center p-10 font-extrabold text-purple-600	">
        {" "}
        OUR COMPANY OVERVIEW
      </h2>
      <Typography className="p-8 mx-auto bg-gray-200">
        {" "}
        Ultronic is a software development company delivering reliable ICT
        services in Uganda. We have been delivering unequaled ICT services to
        companies, organizations, schools and small businesses. Through
        delivering reliable ICT services we have been able to build a large
        satisfied customer base. <br />
        We offer a wide range of services which include Software Development,
        ICT Consultancy, Computer Networking, ICT Installation, System Analysis,
        Website Designing and Hosting, ICT Training, and ICT Solutions for
        companies, organizations, schools and businesses.
        <br />
        <br />
        We are dedicated to satisfying our clients and we work tirelessly to
        ensure that all projects are completed on schedule. We also work hard
        towards acquiring the latest technologies to enable us to work more
        efficiently and also to reduce on the overall cost of production.
      </Typography>
    </div>
  );
}

export default Content;
