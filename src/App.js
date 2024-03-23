import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useState } from "react";
import Loader from "./Pages/Home/Loader";

function App() {
  const [showLoader, setshowLoader] = useState(false);
  return (
    <BrowserRouter>
    {showLoader?<Loader/>:null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
