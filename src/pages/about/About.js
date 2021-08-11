import Card2 from "../../components /Card2";
import Card1 from "../../components /Card1";
import Card from "../../components /Card";
import React from "react";
import Content from "./Content";
import ContactUs from "./ContactUs";

function About() {
  return (
    <div className="flex flex-col md:flex-col p-4">
      {" "}
      <Content />
      <div className="flex flex-col md:flex-row p-4 ">
        <Card />
        <Card1 />
        <Card2 />
      </div>

      <ContactUs/>
    </div>
  );
}

export default About;
