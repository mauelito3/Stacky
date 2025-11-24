import Button from "../components/Button";
import Footer from "../components/Footer";
import MenuScreen from "../screens/MenuScreen";
// Predefined roadmap steps for each role
const roadmaps = {
  frontend: [
    "Learn HTML, CSS, and JavaScript",
    "Master React (or Vue/Angular)",
    "State management (Redux, Zustand, Context API)",
    "UI/UX fundamentals",
    "API integration",
  ],
  backend: [
    "Learn Node.js / Python / Java",
    "Work with databases (SQL & NoSQL)",
    "Build REST APIs / GraphQL",
    "Authentication & Security",
    "Deploy on cloud platforms (AWS/GCP/Azure)",
  ],
  fullstack: [
    "Combine frontend + backend skills",
    "API design and integration",
    "Learn DevOps basics (Docker, CI/CD)",
    "System design concepts",
    "Contribute to real-world fullstack projects",
  ],
};

function Results({ finished, result, restart, scores }) {
  // Do not render anything if quiz not finished
  if (!finished) return null;

  // Restart quiz function
  const replay = () => {
    restart();
  };
  const MenuScreen = () => {
    window.location.reload();
  }
  // Determine the role with the highest score
  const role =
    scores.frontend >= scores.backend && scores.frontend >= scores.fullstack
      ? "frontend"
      : scores.backend >= scores.frontend && scores.backend >= scores.fullstack
      ? "backend"
      : "fullstack";

  return (
    <>
      {/* Overlay for styling */}
      <div className="overlay"></div>

      {/* Main results container */}
      <div className="results">
        <div style={{ marginTop: 20 }}>
          <div className="party"></div> {/* Celebration animation */}
        </div>

        {/* Results message */}
        <div style={{ textAlign: "center", lineHeight: 2 }}>
          <div style={{ fontSize: 25, fontWeight: 700 }}>🎉 Congrats 🎉</div>
          <div style={{ fontSize: 18, fontWeight: 500 }}>{result}</div>
        </div>

        {/* Show raw scores */}
        <div style={{ marginTop: 20, textAlign: "center", fontSize: 16 }}>
          <div>Frontend Score: {scores.frontend}</div>
          <div>Backend Score: {scores.backend}</div>
          <div>Fullstack Score: {scores.fullstack}</div>
        </div>

        {/* Roadmap suggestion */}
        <div style={{ marginTop: 30 }}>
          <h3 style={{ textAlign: "center" }}>📍 Suggested Roadmap for {role.toUpperCase()}</h3>
          <ol style={{ textAlign: "left", margin: "0 auto", maxWidth: 400 }}>
            {roadmaps[role].map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Restart button */}
        <div style={{ width: 200, height: 100, marginTop: 50 }}>
          <Button text={"Start Over"} callback={replay} />
        </div>
          <div style={{ height: 40 }}></div>
        <div style={{ width: 200, height: 100 ,marginTop: 10}}>
          <Button text={"Go Home"} callback={MenuScreen} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Results;
