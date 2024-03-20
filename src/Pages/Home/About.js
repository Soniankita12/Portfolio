import SectionTitle from "../../component/SectionTitle";

const About = () => {
  const skill = [
    "React.js",
    "Javascript",
    "Node.js",
    "Express.js",
    "MongoDb",
    "Git/GitHub",
    "JIRA",
    "C++",
  ];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex items-center text-white sm:flex-col">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/ea1c0b7b-0fb0-4425-917a-e26e96da411e/4rZO5Pvaiy.json"
            background="transparent"></dotlottie-player>
        </div>
        <div className="flex-col gap-5 w-1/2 sm:w-full">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            corporis nisi! Vitae, perspiciatis voluptate suscipit rerum aliquam
            mollitia. Blanditiis, expedita natus itaque voluptas illo totam odio
            vero perferendis necessitatibus consequuntur. Sunt, praesentium aut
            laborum beatae delectus ullam, placeat accusantium neque laudantium
            maiores necessitatibus cupiditate enim dolores in, nemo dignissimos
            unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            dolore itaque qui velit inventore possimus soluta voluptate
            perspiciatis? Est in quas, magni facere, libero molestiae dicta
            delectus nulla, officiis aperiam debitis tenetur earum quam eum
            magnam rerum totam consequatur unde?
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-btncol text-2xl">
          Outlined are latest technologies I've been actively engaged with:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skill.map((skill, index) => (
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
