'use client';

import { BsArrowDownRight } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { SiPython, SiPandas, SiPytorch, SiScipy} from "react-icons/si"; 
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: '01',
    title: 'Flight Prediction',
    description: (
      <>
        Researched methods for flight prediction using a combination of machine learning methods such as feature engineering and LSTM models.
      </>
    ),
    href: 'https://datamine.purdue.edu/sandia-national-labs/',
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiPytorch />, name: "Pytorch" },
      { icon: <SiScipy />, name: "SciPy" },
    ],
    image: '/assets//poster.png',
  },
  {
    num: '02',
    title: 'Paxos',
    description: (
      <>
        Implemented the Paxos consensus algorithm for distributed systems in Java ensuring robust and efficient agreement across nodes
      </>
    ),
    href: 'https://github.com/emichael/dslabs',
    skills: [
      { icon: <FaJava />, name: "Java" },
    ],
    image: '/assets/paxos.png',
  },
];

const Projects = () => {

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 xl:grid-cols-1 gap-[60px]"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center"
          >
            {/* Text Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {project.num}
                </div>
                <h2 className="text-[28px] font-bold leading-none text-gray-700">
                  {project.title}
                </h2>
              </div>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex items-center gap-4 text-gray-700">
                {project.skills.map((skill, i) => (
                  <div key={i} className="relative group">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              <Link 
                href={project.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                  <BsArrowDownRight className="tect-primary text-2xl"/>
              </Link>
            </div>

            {/* Media Section */}
            <div className="w-full h-auto rounded-lg shadow-lg flex justify-center">
              {project.video ? (
                <video controls className="w-full h-auto">
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              ) : (
                <div className="text-center text-gray-500">
                  No media available
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
  );
};

export default Projects;
