import React, { useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const PaidCourses = () => {
  const [likedCourses, setLikedCourses] = useState({});

  const courses = [
    {
      id: 1,
      title: "Basics of Electronics",
      description: "This course covers fundamental concepts in electronics.",
      image: "https://www.shutterstock.com/image-photo/little-engineer-plays-toyconcept-small-260nw-524558209.jpg",
      category: "ELECTRONICS",
      rating: 5,
    },
    {
      id: 2,
      title: "Advanced Robotics",
      description: "Dive deep into robotics and automation systems.",
      image: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2023/07/25174434/efc290acf4d2f1573b4a87aa3999508b.png ",
      category: "ROBOTICS",
      rating: 4,
    },
    {
      id: 3,
      title: "Introduction to AI",
      description: "Learn the basics of Artificial Intelligence and its applications.",
      image: "https://example.com/ai.jpg",
      category: "AI",
      rating: 5,
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      description: "Comprehensive guide to modern web development.",
      image: "https://example.com/webdev.jpg",
      category: "WEB DEVELOPMENT",
      rating: 4,
    },
  ];

  const toggleLike = (id) => {
    setLikedCourses((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col items-center w-full p-6">
      <h1 className="text-center font-black text-3xl p-3">Paid Courses</h1>
      <h2 className="text-center font-normal text-xl mb-6">
        Select any course of your choice to purchase
      </h2>
      <button className="bg-blue-600 font-medium p-2 text-white rounded-2xl h-8 w-30  flex justify-start items-center self-start">
          ELECTRONICS
        </button>

      <div className="flex flex-wrap justify-center gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-green-300 rounded-xl w-80 shadow-lg">
            <img
              className="h-48 w-full object-cover rounded-t-xl"
              src={course.image}
              alt={course.title}
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-blue-600 font-semibold">{course.title}</h3>
                <AiFillHeart
                  style={{
                    color: likedCourses[course.id] ? "red" : "gray",
                    fontSize: "25px",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleLike(course.id)}
                />
              </div>
              <p className="text-gray-700 text-sm mb-4">{course.description}</p>
              <div className="flex">
                {[...Array(course.rating)].map((_, index) => (
                  <AiFillStar key={index} style={{ color: "yellow", fontSize: "20px" }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaidCourses;
