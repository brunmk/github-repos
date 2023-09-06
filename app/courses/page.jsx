import React from "react";
import Courses from "../components/Courses";

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Courses</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Courses />
      </div>
    </div>
  );
};

export default AboutPage;
