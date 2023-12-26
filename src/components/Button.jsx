function Button({ ...props }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        borderRadius: "10px",
      }}
      {...props}
    ></button>
  );
}

export default Button;
