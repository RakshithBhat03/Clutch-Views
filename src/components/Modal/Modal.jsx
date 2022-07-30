import ReactDOM from "react-dom";
import "./Modal.css";
const Modal = ({ open, children, close }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={close} className="modal-overlay" />
      <div className="width-100">
        <div
          onClick={(e) => e.stopPropagation()}
          className="display-flex flex-col align-items-center justify-content-center modal-container gap-1">
          <button
            onClick={close}
            className="txt-md txt-white ml-auto position-absolute btn-modal-close">
            <i className="fas fa-times"></i>
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export { Modal };
