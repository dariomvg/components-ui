import { getColor } from "../colors/colors";
import "../styles/Button.css";

const Button = ({ children, onClick, bg }) => {
  const bgColor = getColor(bg);

  return (
    <button
      onClick={onClick}
      className="button"
      style={{ backgroundColor: bgColor }}>
      {children}
    </button>
  );
};

export default Button;
