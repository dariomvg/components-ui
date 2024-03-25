import "../styles/Toggle.css";

const Toggle = ({onClick}) => {
  return (
    <label className="switch" onClick={onClick}>
  <input type="checkbox" />
  <span className="slider"></span>
</label>
  );
};

export default Toggle;
