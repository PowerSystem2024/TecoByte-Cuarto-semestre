export function Button({ children, className, ...props }) {
  return (
    <button
      className={`btn-modern ${className} `}
      {...props}
    >
      { children }
    </button>
  );
}

export default Button;