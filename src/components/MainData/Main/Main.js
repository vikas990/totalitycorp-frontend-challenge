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
  footer,
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
        {footer && (
          <ul className="footer">
            <li>Tesla &#169; 2022</li>
            <li>Privacy & Legal</li>
            <li>Vehicle Recalls</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>
            <li>Engage</li>
            <li>Locations</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Main;
