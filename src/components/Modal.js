function Modal({ open, closeModalHandler, children }) {
  return (
    <>
      <div
        className=" "
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={open}>{children}</div>
      </div>
    </>
  );
}

export default Modal;
