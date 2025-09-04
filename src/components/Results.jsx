import Button from "../components/Button";

function Results({ finished, result }) {
  if (!finished) return null;

  const replay = () => {
    
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="results">
        <div style={{ marginTop: 20 }}>
          <div className="party"></div>
        </div>

        {/* results message  */}
        <div style={{ textAlign: "center", lineHeight: 2 }}>
          <div style={{ fontSize: 25, fontWeight: 700 }}>Congrats</div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>{result}</div>
        </div>

        {/* buttons  */}
        <div style={{ width: 200, height: 100, marginTop: 50 }}>
          <Button text={"Star Over"} callback={replay} />
        </div>
      </div>
    </>
  );
}

export default Results;
