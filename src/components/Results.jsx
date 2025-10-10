import Button from "../components/Button";

function Results({ finished, result, restart, message }) {

  if (!finished) return null;

  const replay = () => {
    restart();
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="results">

        {/* results message  */}
        <div style={{ textAlign: "center", lineHeight: 2, marginTop: 20 }}>
          <div style={{ fontSize: 25, fontWeight: 700 }}>Congrats!!!</div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>{result}</div>
          <div style={{ fontSize: 14, fontWeight: 400, marginTop: 10 }}>
            {message}
          </div>
        </div>

        {/* buttons  */}
        <div style={{ width: 200, height: 100, marginTop: 25, marginBottom: 20 }}>
          <Button text={"Start Over"} callback={replay} />
        </div>
      </div>
    </>
  );
}

export default Results;