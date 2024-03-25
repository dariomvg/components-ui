import "../styles/Toggle.css";

const Toggle = ({onClick}) => {
  return (
    <label className="switch" >
  <input type="checkbox" onClick={onClick} />
  <span className="slider"></span>
</label>
  );
};

export default Toggle;
