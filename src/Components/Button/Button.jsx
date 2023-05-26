import "./Button.scss";

function Button({
  variant,
  type = "button",
  children,
  handleaddtobacked,
  handleEnd,
}) {
  return (
    <button
      className={`button ${variant}`}
      type={type}
      onClick={handleaddtobacked ? handleaddtobacked : handleEnd}
    >
      {children}
    </button>
  );
}

export default Button;
