import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setportfolioData } from "./redux/rootSlice";
import Loader from "./Pages/Home/Loader";
import axios from "axios";
import Home from "./Pages/Home/Home";
import Admin from "../src/Pages/Admin/Admin";
import Login from "./Pages/Admin/Login";

function App() {
  const { loading, portfolioData, reloadData, ReloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(setportfolioData(response.data));
      console.log("data", response);
      dispatch(ReloadData(false));
    } catch (error) {}
  };

  useEffect(() => {
    getPortfolioData();
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
