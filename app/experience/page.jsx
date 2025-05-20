"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { SiPython, SiRedis, SiAmazonaws, SiAmazondynamodb, SiAmazonelasticache, SiFastapi, SiDocker, SiPytest, SiSqlite, SiC, SiCplusplus, SiLinux } from "react-icons/si";
const experiences = [
  {
    num: "01",
    category: "Software Engineering Intern",
    title: "Klaviyo",
    description: (
      <>
        Migrated databases to AWS
      </>
    ),
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: < SiAmazonaws/>, name: "AWS" },
      { icon: <SiAmazondynamodb />, name: "DynamoDB" },
      { icon: <SiAmazonelasticache />, name: "Elasticache" },
    ],
    timeline: "Jun 2025 - Present",
    location: "Boston, MA",
  },
  {
    num: "02",
    category: "Software Engineering Intern",
    title: "Maxar Technologies",
    description: (
      <>
        Designed and developed a RESTful API using Python to enhance data access for downstream teams
      </>
    ),
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiPytest />, name: "Pytest" },
      { icon: <SiSqlite />, name: "SQLite" },
    ],
    timeline: "May 2024 - Aug 2024",
    location: "San Jose, CA",
  },
  {
    num: "03",
    category: "Teaching Assistant",
    title: "Purdue University",
    description: (
      <>
        Held weekly labs and office hours for the undergraduate operating systems and systems programming courses
      </>
    ),
    skills: [
      { icon: <SiC />, name: "C" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiLinux />, name: "Linux" },
    ],
    timeline: "January 2024 - Present",
    location: "West Lafayette, IN",
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const experience = experiences[selectedExperience];
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.3, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {/* Use Grid Layout */}
        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center"
          style={{ alignItems: "center" }}
        >
         {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {experience.num}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2 mt-8">
              <button
                onClick={() => setSelectedExperience((prev) => (prev === 0 ? experiences.length - 1 : prev - 1))}
                className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                ◀
              </button>

              <button
                onClick={() => setSelectedExperience((prev) => (prev === experiences.length - 1 ? 0 : prev + 1))}
                className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                ▶
              </button>
            </div>
          </div>

            <h1 className="text-6xl font-bold text-800">{experience.title}</h1>
            <h2 className="text-[42px] font-bold leading-none text-700 capitalize">
              {experience.category}
            </h2>
            <div className="text-900">{experience.description}</div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-xl font-semibold">Skills:</div>
              <div className="text-l text-accent flex flex-wrap gap-2">
                {experience.skills.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-m text-gray-600">
              <p>{experience.timeline}</p>
              <p>{experience.location}</p>
            </div>
          </div>
        </div>

        {/* Tableau Embed Section */}
        </div>
    </motion.section>
  );
};

export default Experience;
