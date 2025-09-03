import { useState } from "react";

// main screens
import MenuScreen from "./screens/MenuScreen";
import QuizScreen from "./screens/QuizScreen";

function Stacky() {
  const [started, setStarted] = useState(false);
  return started ? <QuizScreen /> : <MenuScreen />;
}

export default Stacky;
