"use client";
import React, { useEffect, useState } from "react";
import Courses from "../components/Courses";

const AboutPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  console.log(courses);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="my-4 text-center">Courses</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Courses courses={courses} />
      </div>
    </div>
  );
};

export default AboutPage;
