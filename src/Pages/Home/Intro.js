import { useSelector } from "react-redux";

const Intro = () => {
  const {  portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, caption, description } = intro;
  return (
    <div className="h-[80vh] bg-Primary flex flex-col items-start justify-center gap-8">
      <h1 className="text-white">{welcomeText || ''}</h1>
      <h1 className="text-4xl  text-secondary font-semibold sm:text-2xl ">
       {firstName || " "}{" "}{lastName || ''}
      </h1>
      <h1 className="text-4xl  text-tretiary font-semibold sm:text-2xl">
       {caption}
      </h1>
      <p className="text-white ">
        {description}
      </p>
      <button className="border-2 border-btncol text-btncol px-10 py-4 ">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
