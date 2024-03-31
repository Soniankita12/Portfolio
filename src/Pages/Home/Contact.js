import SectionTitle from "../../component/SectionTitle";
import { contactPic } from "../../resources/experience";
import { useSelector } from "react-redux";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex items-center justify-between sm:flex-col ">
        <div className=" flex flex-col gap-1 ml-10 text-white">
          <h1>{"{"}</h1>
          {Object.keys(contact).map((key) => (
            <h1 className="ml-5">
              <span>{key}</span>: <span>{contact[key]}</span>
            </h1>
          ))}
          <h1>{"}"}</h1>
        </div>
        <div>
          <img
            alt="imag"
            className="h-48 w-80 m-4 border rounded-lg"
            src={contactPic}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
