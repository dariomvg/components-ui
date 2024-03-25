import { useState } from "react";
import iconBottom from "../assets/icons/arrow-top.svg";
import iconTop from "../assets/icons/arrow-bottom.svg";
import { getBg } from "../colors/colors";
import "../styles/Collapse.css";

const Collapse = ({ children, title, bg, width }) => {
  const [active, setActive] = useState(false);
  const handleContent = () => setActive(!active);
  const bgColor = getBg(bg);

  return (
    <div
      className={`container ${active ? "visible" : ""}`}
      style={{ width: width, backgroundColor: bgColor }}>
      <div className="sec-title">
        <h3 className="title">{title}</h3>
        {active ? (
          <img
            src={iconBottom}
            alt="icon arrow"
            width={20}
            height={20}
            className="icon"
            onClick={handleContent}
          />
        ) : (
          <img
            src={iconTop}
            alt="icon arrow"
            width={20}
            height={20}
            className="icon"
            onClick={handleContent}
          />
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Collapse;
