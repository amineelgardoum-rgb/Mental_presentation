import { FaPython,FaHtml5, FaKaggle, FaDocker} from "react-icons/fa";
import MatrixBackground from "../MatrixBackground";
import {
  SiChartmogul,
  SiJupyter,
  SiKaggle,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";
import { Footer } from "./Footer";
import '../shadow.css'
import { MdTableChart } from "react-icons/md";

export const Project = () => {
  const project = {
    id: 1,
    title: "Mental prediction app:",
    description:
      "This project explores the use of machine learning to predict the likelihood of depression in students by analyzing key lifestyle factors such as sleep duration, academic workload, and self-reported stress levels. By identifying patterns linked to mental health challenges, the system can help detect students who may be at risk and encourage early intervention. The ultimate goal is to raise awareness about student wellness, promote healthier habits, and demonstrate how data-driven tools can support mental health in academic environments.",
    skills: [
      "scikit-learn",
      "Kaggle",
      "mathplotlib",
      "jupyter",
      "seaborn",
      "pandas"
    ],
    link: "https://github.com/amineelgardoum-rgb/Depression_Predict",
    video_link:"https://drive.google.com/file/d/18yIULHfz0z7ySvSU6hCftUsnvJQGor-q/view?usp=sharing",
    image: "/images/structure.png",
  };

  const skillInfo = {
    "scikit-learn":{
      icon:<SiScikitlearn />,
      color:"text-white",
      hoverColor:"hover:text-orange-600",
      glow:"hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
    },
    pandas:{
      icon:<SiPandas/>,
      color:"text-white",
      hoverColor:"hover:text-blue-500",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    kaggle:{
      icon:<SiKaggle />,
      color:"text-white",
      hoverColor:"hover:text-blue-800",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    mathplotlib:{
      icon:<SiChartmogul />,
      color:"text-white",
      hoverColor:"hover:text-blue-600",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    seaborn:{
      icon:<MdTableChart />,
      color:'text-white',
      hoverColor:"hover:text-blue-500",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    jupyter:{
      icon:<SiJupyter />,
      color:"text-white",
      hoverColor:"hover:text-orange-600",
      glow:"hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
    }
  };

  const getSkillInfo = (skill) =>
    skillInfo[skill.toLowerCase()] || {
      icon: <FaPython />,
      color: "text-gray-400",
      hoverColor: "text-white",
    };

  return (
    <>
      <MatrixBackground />
      <CustomCursor />
      <section
        id="project"
        className="flex min-h-screen items-center justify-center mb-5 bg-black text-green-300 px-6 py-20"
      >
        <div className="max-w-5xl text-center">
          {/* Title */}
          <RevealOnScroll>
            <h1 className="text-5xl md:text-6xl p-6 font-bold mb-10 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent font-mono ">
              {project.title}
            </h1>
          </RevealOnScroll>

          {/* Image */}
          <RevealOnScroll>
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto rounded-2xl object-fit hover:scale-105 shadow  transition-all duration-300 mb-20"
            />
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-20 max-w-3xl mx-auto">
              {project.description}
            </p>
          </RevealOnScroll>

          {/* Skills */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-8 mb-30">
              {project.skills.map((skill) => {
                const { icon, color, hoverColor, glow } = getSkillInfo(skill);
                return (
                  <div
                    key={skill}
                    className={`text-5xl cursor-none transition-all duration-500 hover:scale-125 ${color} ${hoverColor} ${glow} hover:-translate-y-1`}
                    title={skill}
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* Link */}
          <RevealOnScroll>
            <a
              href={project.video_link}
              target="_blank"
              rel="noopener noreferrer"
              className=" group inline-block cursor-none bg-transparent hover:bg-green-500/100 hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)] border border-green-500/100  hover:text-black px-8 py-4 text-lg font-semibold rounded-xl  hover:border-green-200   hover:border hover:border-green-500/100  hover:scale-105 hover:-translate-y-1 m-10 transition-all duration-500 "
            >
              View Tutorial video <span className="group-hover:translate-x-2 inline-block transition-all  duration-500"> → </span>
            </a>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" group inline-block cursor-none hover:bg-transparent hover:text-green-200 px-8 py-4 text-lg font-semibold rounded-xl hover:border hover:border-green-200 hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)] bg-green-500 text-black hover:scale-105 hover:-translate-y-1 m-10 transition-all duration-500 "
            >
              View on GitHub <span className="group-hover:translate-x-2 inline-block transition-all duration-500" > → </span>
            </a>
          </RevealOnScroll>
        </div>
      </section>
      <footer>
        <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
      </footer>
    </>
  );
};
