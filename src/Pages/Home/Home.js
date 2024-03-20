import Header from "../../component/Header";
import Intro from "./Intro";
import About from "./About"; 
import Experience from "./Experience";
import Project from "./Project";
const Home = () => {
  return (
    <div className=" bg-Primary ">
      <Header />
      <div className=" px-40 sm:px-4">
        <Intro />
        <About />
        <Experience/>
        <Project/>
      </div>
    </div>
  );
};

export default Home;
