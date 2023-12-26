function Button({ children, ...props }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        borderRadius: "10px",
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
