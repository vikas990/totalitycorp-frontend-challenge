import React from "react";
import Main from "./Main/Main";
import "./MainData.css";
import { MainListdata } from "../arrayItems/ArrayItems";

const MainData = () => {
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
          footer={data.footer}
        />
      ))}
    </div>
  );
};

export default MainData;
