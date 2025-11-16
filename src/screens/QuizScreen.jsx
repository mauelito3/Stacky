// Import components
import Footer from "../components/Footer";
import Results from "../components/Results";
import Logo from "./../components/Logo";

// Import quiz questions data
import { questions } from "./../data/questions";

// Import custom hook for quiz state management
import { useStacky } from "./../hooks/useStacky";

function QuizScreen() {
  // Destructure all state and functions from useStacky hook
  const { currentQ, scores, finished, handleAnswer, restart, getResult } =
    useStacky(questions);

  // If the quiz is finished, only render the Results component
  if (finished) {
    return (
      <Results
        finished={finished}   // tells Results that quiz is finished
        scores={scores}       // pass current scores for roadmap calculation
        result={getResult()}  // get final result message (role)
        restart={restart}     // function to restart quiz
      />
    );
  }

  // Get the current question object
  const q = questions[currentQ];

  return (
    <>
      {/* Logo at the top */}
      <Logo size={70} top={10} tag={false} fs={30} />

      {/* Quiz area for questions and answers */}
      <div className="quizarea">
        {/* Current question indicator */}
        <div className="currentQuest">
          Question {currentQ + 1} of {questions.length}
        </div>

        {/* Current question text */}
        <div className="question">{q.text}</div>

        {/* Answer options */}
        <div className="answers">
          {q.options.map((opt, i) => (
            <button
              className="answer"
              key={i}
              onClick={() => handleAnswer(opt.points)} // submit answer and update score
            >
              {opt.answer}
            </button>
          ))}
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default QuizScreen;
