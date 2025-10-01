import { useState } from "react";

/*
  Custom React hook to manage the state of the Stacky quiz app.
  Handles current question, scoring, quiz completion, restart, and result calculation.
*/
export function useStacky(questions) {
  // Track the index of the current question (starts at 0)
  const [currentQ, setCurrentQ] = useState(0);

  // Track scores for each role
  const [scores, setScores] = useState({
    frontend: 0,
    backend: 0,
    fullstack: 0,
  });

  // Track whether the quiz has finished
  const [finished, setFinished] = useState(false);

  /*
    Handle answer submission
    - 'points' is an object like { frontend: 1, backend: 0, fullstack: 0 }
    - Updates the scores
    - Moves to the next question or finishes the quiz if it's the last question
  */
  const handleAnswer = (points) => {
    setScores((prev) => ({
      frontend: prev.frontend + (points.frontend || 0),
      backend: prev.backend + (points.backend || 0),
      fullstack: prev.fullstack + (points.fullstack || 0),
    }));

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1); // move to next question
    } else {
      setFinished(true); // quiz completed
    }
  };

  /*
    Reset the quiz
    - Resets current question, scores, and finished state
    - Can be called when user clicks "Start Over"
  */
  const restart = () => {
    setCurrentQ(0);
    setScores({ frontend: 0, backend: 0, fullstack: 0 });
    setFinished(false);
  };

  /*
    Calculate the result
    - Determines which role has the highest score
    - Returns a string message
  */
  const getResult = () => {
    const max = Math.max(scores.frontend, scores.backend, scores.fullstack);
    if (max === scores.frontend) return "You are a Frontend Guy!";
    if (max === scores.backend) return "You are Backend Guy!";
    return "You are Fullstack Guy!";
  };

  // Return all state and functions to be used in components
  return {
    currentQ,   // current question index
    scores,     // current role scores
    finished,   // whether quiz is finished
    handleAnswer, // function to submit an answer
    restart,      // function to restart the quiz
    getResult,    // function to get the final result string
  };
}
