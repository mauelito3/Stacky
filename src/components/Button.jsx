function Button({ text, callback }) {
  const style = {
    width: "100%",
    height: 40,
    borderRadius: 5,
  };
  return (
    <button onClick={callback} style={style}>
      {text ?? "Default Text"}
    </button>
  );
}

export default Button;
