import { useEffect, useState } from "react";
import "./App.css";
import MainData from "./components/MainData/MainData";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    document.title = "Electric Cars, Solar & Clean Energy | Tesla";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MainData />
    </div>
  );
}

export default App;
