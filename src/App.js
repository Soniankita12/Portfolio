import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPortfolioData } from "./redux/rootSlice";
import Loader from "./Pages/Home/Loader";
import axios from "axios";
import Home from "./Pages/Home/Home";

function App() {

  const [loading] = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(setPortfolioData(response.data));
      console.log("data", response);
    } catch (error) {}
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
