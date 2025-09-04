// components
import Footer from "../components/Footer";
import Results from "../components/Results";
import Logo from "./../components/Logo";

import { questions } from "./../data/questions";

// hooks
import { useStacky } from "./../hooks/useStacky";

function QuizScreen() {
  const { currentQ, scores, finished, handleAnswer, restart, getResult } =
    useStacky(questions);

  const q = questions[currentQ];

  return (
    <>
      <Logo size={50} top={30} tag={false} fs={30} />

      <Results finished={finished} result={getResult()} />
      <div className="quizarea">
        {/* current question indicator */}
        <div className="currentQuest">
          Question {currentQ + 1} of {questions.length}
        </div>

        {/* current question text */}
        <div className="question">{q.text}</div>

        {/* answer buttons */}
        <div className="answers">
          {q.options.map((opt, i) => (
            <button
              className="answer"
              key={i}
              onClick={() => handleAnswer(opt.points)}
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
