import { useState } from "react";

export function useStacky(questions) {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({
    frontend: 0,
    backend: 0,
    fullstack: 0,
    devops: 0,
    mobile: 0,
  });

  const [finished, setFinished] = useState(false);

  // submit answer handler
  const handleAnswer = (points) => {
    setScores((prev) => ({
      frontend: prev.frontend + (points.frontend || 0),
      backend: prev.backend + (points.backend || 0),
      fullstack: prev.fullstack + (points.fullstack || 0),
      devops: prev.devops + (points.devops || 0),
      mobile: prev.mobile + (points.mobile || 0),
    }));

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScores({ frontend: 0, backend: 0, fullstack: 0, devops: 0, mobile: 0 });
    setFinished(false);
  };

  const getWinningRole = () => {
    return Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  };

  const getResult = () => {
    const role = getWinningRole();
    if (role === "frontend") return "You are a Frontend Guy!";
    if (role === "backend") return "You are a Backend Guy!";
    if (role === "fullstack") return "You are a Fullstack Guy!";
    if (role === "devops") return "You are a DevOps Guy!";
    if (role === "mobile") return "You are a Mobile Dev Guy!";
  };

  const getMessage = () => {
    const role = getWinningRole();
    if (role === "frontend") return "You have a keen eye for design and user experience. Frontend development is your forte!";
    if (role === "backend") return "You excel at problem-solving and building robust systems. Backend development suits you well!";
    if (role === "fullstack") return "You are versatile and enjoy working on both the client and server sides. Fullstack development is your strength!";
    if (role === "devops") return "You have a knack for infrastructure and automation. DevOps is the perfect fit for you!";
    if (role === "mobile") return "You love creating mobile applications that users can enjoy on the go. App development is your passion!";
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