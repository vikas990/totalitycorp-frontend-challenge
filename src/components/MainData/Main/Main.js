import React from "react";
import Button from "../Button/Button";
import Down from "../../../Images/down.png";
import "./Main.css";

const Main = ({
  title,
  desc,
  img,
  leftBtnText,
  rightBtnText,
  twoButton,
  first,
}) => {
  return (
    <div className="main" style={{ backgroundImage: `url(${img})` }}>
      <div className="main__container">
        <div className="main__Container__text">
          <p>{title}</p>
          <div className="main__container__text-Desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="main__container__bottom">
          <div className="main__container__bottom-buttons">
            <Button color="primary" text={leftBtnText} />
            {twoButton && <Button color="secondary" text={rightBtnText} />}
          </div>
          {first && (
            <div className="main__container__bottom-down">
              <img
                src={Down}
                alt="down button"
                className="main__container__bottom-down__img"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
