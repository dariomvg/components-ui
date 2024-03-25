import { getColor } from "../colors/colors";
import "../styles/Badge.css";

const Badge = ({ children, bg, width = "", variant }) => {
  const bgColor = getColor(bg);

  return (
    <div
      style={{ backgroundColor: bgColor, width: width }}
      className={`badge ${variant}`}>
      {children}
    </div>
  );
};

export default Badge;
