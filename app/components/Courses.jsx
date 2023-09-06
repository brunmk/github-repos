import Link from "next/link";
import React from "react";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <>
      {courses.map((course) => (
        <div className="col">
          <div key={course.id} className="card mb-4">
            <img
              src={course.image}
              alt={course.description}
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">{course.title}</h4>
              <small>Level: {course.level}</small>
              <p>{course.description}</p>
            </div>
            <div className="card-footer">
              <Link
                href={course.link}
                target="_blank"
                className="btn btn-primary"
              >
                Go To Course
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Courses;
