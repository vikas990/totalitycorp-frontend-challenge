import React from "react";
import Main from "./Main/Main";
import "./MainData.css";

// All Background Images
import Accessories from "../../Images/Accessories.jpg";
import Model3 from "../../Images/Model3.jpeg";
import ModelS from "../../Images/ModelS.jpeg";
import ModelX from "../../Images/ModelX.jpeg";
import ModelY from "../../Images/ModelY.jpeg";
import SolarPanels from "../../Images/SolarPanels.jpeg";
import SolarRoof from "../../Images/SolarRoof.jpeg";

const MainData = () => {
  const MainListdata = [
    {
      title: "Model 3",
      desc: "Order Online for Touchless Drive",
      img: Model3,
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      twoButton: true,
      first: true,
    },
    {
      title: "Model Y",
      desc: "Order Online for Touchless Drive",
      img: ModelY,
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      twoButton: true,
    },
    {
      title: "Model S",
      desc: "Order Online for Touchless Drive",
      img: ModelS,
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      twoButton: true,
    },
    {
      title: "Model X",
      desc: "Order Online for Touchless Drive",
      img: ModelX,
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      twoButton: true,
    },
    {
      title: "Solar Panels",
      desc: "Lowest Cost Solar Panels in America",
      img: SolarPanels,
      leftBtnText: "Order Now",
      rightBtnText: "Learn More",
      twoButton: true,
    },
    {
      title: "Solar Roof",
      desc: "Produce Clean Energy From your Roof",
      img: SolarRoof,
      leftBtnText: "Order Now",
      rightBtnText: "Learn More",
      twoButton: true,
    },
    {
      title: "Accessories",
      desc: "",
      img: Accessories,
      leftBtnText: "Shop Now",
      rightBtnText: "",
      twoButton: false,
    },
  ];
  return (
    <div className="mainData__Container">
      {MainListdata.map((data, index) => (
        <Main
          key={index}
          title={data.title}
          desc={data.desc}
          img={data.img}
          leftBtnText={data.leftBtnText}
          rightBtnText={data.rightBtnText}
          twoButton={data.twoButton}
          first={data.first}
        />
      ))}
    </div>
  );
};

export default MainData;
