import Footer from "../components/Footer";
import Results from "../components/Results";
import Logo from "./../components/Logo";
import ProgressBar from "../components/ProgressBar";
import { questions } from "./../data/questions";
import { useQuizStore } from "../store/quizStore";

function QuizScreen() {
  const {
    currentQ,
    handleAnswer,
    answers,
  } = useQuizStore();

  const q = questions[currentQ];

  return (
    <>
      <Logo size={70} top={10} tag={false} fs={30} />
      <Results />
      <div className="quizarea">
        <ProgressBar current={currentQ + 1} total={questions.length} />
        <div className="currentQuest">
          Question {currentQ + 1} of {questions.length}
        </div>
        <div className="question">{q.text}</div>
        <div className="answers">
          {q.options.map((opt, i) => (
            <button
              className={`answer ${answers[currentQ] === i ? "selected" : ""}`}
              key={i}
              onClick={() => handleAnswer(opt.points, i)}
            >
              {opt.answer}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QuizScreen;