import { useState } from "react";
import "../styles/Modal.css";

const Modal = ({ children, titleButton }) => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  return (
    <>
      <button className="btn-modal" onClick={handleModal}>
        {titleButton}
      </button>
      <section className={`container-modal ${active ? "active" : ""}`}>
        <div className="modal">
          <button onClick={handleModal} className="close-modal">X</button>
          {children}
        </div>
      </section>
    </>
  );
};

export default Modal;
