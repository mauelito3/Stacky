import Button from "../components/Button";
import { useQuizStore } from "../store/quizStore";

function Results() {
  const { finished, getResult, getMessage, restart } = useQuizStore();

  if (!finished) return null;

  return (
    <>
      <div className="overlay"></div>
      <div className="results">
        <div style={{ textAlign: "center", lineHeight: 2, marginTop: 20 }}>
          <div style={{ fontSize: 25, fontWeight: 700 }}>Congrats</div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>{getResult()}</div>
          <div style={{ fontSize: 14, fontWeight: 400, marginTop: 10 }}>
            {getMessage()}
          </div>
        </div>

        <div style={{ width: 200, height: 100, marginTop: 30, marginBottom: 20 }}>
          <Button text={"Start Over"} callback={restart} />
        </div>
      </div>
    </>
  );
}

export default Results;