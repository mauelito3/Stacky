import { useState } from "react";
import { roles } from "../data/roles"; 

const getInitialScores = () => {
  const initialScores = {};
  for (const role in roles) {
    initialScores[role] = 0;
  }
  return initialScores;
};

export function useStacky(questions) {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState(getInitialScores());
  const [finished, setFinished] = useState(false);

  const handleAnswer = (points) => {
    const newScores = { ...scores };
    for (const role in points) {
      if (newScores.hasOwnProperty(role)) {
        newScores[role] += points[role];
      }
    }
    setScores(newScores);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScores(getInitialScores());
    setFinished(false);
  };

  const getWinningRole = () => {
    return Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  };

  const getResult = () => {
    const role = getWinningRole();
    return roles[role]?.title || "You are a Developer!";
  };

  const getMessage = () => {
    const role = getWinningRole();
    return roles[role]?.message || "Time to start your coding journey!";
  };

  return {
    currentQ,
    scores,
    finished,
    handleAnswer,
    restart,
    getResult,
    getMessage,
  };
}