/* eslint-disable no-undef */
import SectionTitle from "../../component/SectionTitle";
import { useSelector } from "react-redux";

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, description1, lottieImgUrl, description2 } = about;

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex items-center text-white sm:flex-col">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src={lottieImgUrl || ""}
            background="transparent"></dotlottie-player>
        </div>
        <div className="flex-col gap-5 w-1/2 sm:w-full">
          <p>{description1 || ""}</p>
          <p>{description2 || ""}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-btncol text-2xl">
          Outlined are latest technologies I've been actively engaged with:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border-2 py-3 px-10 border-btncol">
              <h1 className="text-btncol">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
