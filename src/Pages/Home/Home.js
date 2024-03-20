import Header from "../../component/Header";
import Intro from "./Intro";
import About from "./About"; 
const Home = () => {
  return (
    <div className=" bg-Primary ">
      <Header />
      <div className=" px-40 sm:px-4">
        <Intro />
        <About />
      </div>
    </div>
  );
};

export default Home;
