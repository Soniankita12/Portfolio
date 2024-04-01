import { useDispatch, useSelector } from "react-redux";

const AdminExp = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;

  return (
    <div className="grid grid-cols-4 gap-4">
      {experience.map((experience) => (
        <div className="shadow border p-2" key={experience._id}>
          <h1 className="text-secondary text-xl">{experience.Period}</h1>
          <hr />
          <h1>{experience.company}</h1>
          <h1>{experience.title}</h1>
          <h1>{experience.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default AdminExp;
