import { useState } from "react";

// main screens
import MenuScreen from "./screens/MenuScreen";
import QuizScreen from "./screens/QuizScreen";

function Stacky() {
  const [started, setStarted] = useState(false);

  /*
     I realize this isn’t ideal, but I plan to 
     handle the quiz state properly with 
     Zustand or Redux.
   */
  
  const start = () => {
    setStarted(true);
  };

  return started ? <QuizScreen /> : <MenuScreen starter={start} />;
}

export default Stacky;
