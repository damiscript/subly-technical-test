interface ButtonProps {
  onClick: any;
  extraStyle: String;
  disabled: Boolean;
  children: any;
}
/**
 * A generic button used throughout the application
 */
const Button = ({ onClick, extraStyle, children, disabled }: ButtonProps) => {
  const disabledStyle = disabled
    ? "opacity-75 pointer-events-none cursor-not-allowed"
    : "";
  return (
    <button
      className={`px-2 py-1 font-semibold rounded ${extraStyle} ${disabledStyle}`}
      onClick={e => {
        e.preventDefault();
        if (disabled) {
          return;
        }
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  extraStyle: "bg-indigo-600 text-white hover:bg-indigo-900"
};
export default Button;
