// Import useState hook from React to manage component state
import { useState } from "react";

// Import main screens of the app
import MenuScreen from "./screens/MenuScreen"; // The landing screen with Start button
import QuizScreen from "./screens/QuizScreen"; // The quiz interface

function Stacky() {
  // State to track whether the quiz has started
  const [started, setStarted] = useState(false);

  /*
     Note: Right now, the quiz state (questions, scores, etc.) is handled locally.
     In the future, it would be better to manage it using a global state manager 
     like Zustand or Redux for cleaner and scalable code.
   */
  
  // Function to start the quiz; updates 'started' state to true
  const start = () => {
    setStarted(true);
  };

  // Conditional rendering:
  // - If quiz has started, show QuizScreen
  // - Otherwise, show MenuScreen and pass 'start' function as prop
  return started ? <QuizScreen /> : <MenuScreen starter={start} />;
}

// Export the Stacky component as default so it can be imported elsewhere
export default Stacky;
