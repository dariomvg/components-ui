import "../styles/Toggle.css";

const Toggle = () => {
  return (
    <label className="switch">
  <input type="checkbox" />
  <span className="slider"></span>
</label>
  );
};

export default Toggle;
