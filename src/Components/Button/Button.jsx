import "./Button.scss";

function Button({ variant, children, handleaddtobacked, navigate }) {
  return (
    <button
      className={`button ${variant}`}
      onClick={handleaddtobacked ? handleaddtobacked : navigate}
    >
      {children}
    </button>
  );
}

export default Button;
