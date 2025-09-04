import { useState } from "react";

export function useStacky(questions) {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({
    frontend: 0,
    backend: 0,
    fullstack: 0,
  });

  const [finished, setFinished] = useState(false);

  const restart = () => {
    setCurrentQ(0);
    setScores({ frontend: 0, backend: 0, fullstack: 0 });
    setFinished(false);
  };

  const getResult = () => {
    const max = Math.max(scores.frontend, scores.backend, scores.fullstack);
    if (max === scores.frontend) return "You are a Frontend Guy!";
    if (max === scores.backend) return "You are Backend Guy!";
    return "You are Fullstack Guy!";
  };

  return {
    currentQ,
    scores,
    finished,
    handleAnswer,
    restart,
    getResult,
  };
}
