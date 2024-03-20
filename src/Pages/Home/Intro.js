const Intro = () => {
  return (
    <div className="h-[80vh] bg-Primary flex flex-col items-start justify-center gap-8">
      <h1 className="text-white">Hi , I am</h1>
      <h1 className="text-4xl  text-secondary font-semibold sm:text-2xl ">
        Ankita Soni
      </h1>
      <h1 className="text-4xl  text-tretiary font-semibold sm:text-2xl">
        Crafting web through code, innovation, and problem-solving prowess.
      </h1>
      <p className="text-white ">
        a Software Developer with a passion for front-end development, bringing
        life to innovative web solutions. With a B.Tech in Mechanical
        Engineering from NIT Jalandhar, I excel in React.js, JavaScript, and
        Agile methodologies. At Physics Wallah, I led the PEN-PENCIL project,
        enhancing user experience significantly. My portfolio includes projects
        like a dynamic weather website and a Zomato clone, showcasing my knack
        for increasing engagement. A 3-star coder on LeetCode, I'm committed to
        excellence in problem-solving and design.
      </p>
      <button className="border-2 border-btncol text-btncol px-10 py-4 ">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
