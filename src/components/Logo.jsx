function Logo({ size, top, tag, fs }) {
  const style = {
    width: 300,
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    left: 0,
    right: 0,
    marginTop: top,
    margin: "auto",
  };
  return (
    <>
      <div style={style}>
        <div className="stacky" style={{ width: size, height: size }}></div>

        <div className="script" style={{ fontSize: fs, color: "#fff" }}>
          Hi , i am <strong>Stacky</strong>
        </div>

        {/* game description */}
        <div
          style={{
            fontSize: fs,
            display: tag ? "flex" : "none",
            color: "#fff",
          }}
        >
          I’ll help you decide which role is perfect for you.
        </div>
      </div>
    </>
  );
}

export default Logo;
