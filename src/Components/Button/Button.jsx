import "./Button.scss";

function Button({
  variant,
  type = "button",
  children,
  handleaddtobacked,
  handleBuy,
}) {
  return (
    <button
      className={`button ${variant}`}
      type={type}
      onClick={handleaddtobacked ? handleaddtobacked : handleBuy}
    >
      {children}
    </button>
  );
}

export default Button;
