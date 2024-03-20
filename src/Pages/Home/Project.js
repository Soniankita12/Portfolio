import { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { project } from "../../resources/project";


const Project = () => {
  const [selected, setselected] = useState(0);
  return (
    <div>
      <SectionTitle title="Project" />
      <div className="flex py-10 gap-20 ">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-col sm:overflow-x-scroll sm:w-full">
          {project.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer "
              onClick={() => {
                setselected(index);
              }}>
              <h1
                className={`text-xl   px-5 ${
                  selected === index
                    ? `text-btncol py-3  border-btncol border-l-4 -ml-[3px] bg-[#1a7f5a31] sm:w-40`
                    : `text-white`
                }`}>
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col ">
          <img src={project[selected].image} alt="images" className="h-50 w-64"/>
          <div className="flex flex-col gap-5 ">
            <h1 className="text-btncol text-2xl">{project[selected].title}</h1>
            <h1 className="text-btncol text-2xl">
              {"Tech Stack: " + project[selected].tech.join(", ")}
            </h1>
            <h1 className="text-btncol text-2xl">{project[selected].desc}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
