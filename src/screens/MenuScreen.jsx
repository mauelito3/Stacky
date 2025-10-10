import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Button from "../components/Button";

function MenuScreen({ starter }) {
  return (
    <>
      <div className="menuscreen">
        <div className="content">
          <div className="stacky" style={{ width: 160, height: 160 }}></div>

          <div className="script">
            Hi, I'm <strong>Stacky</strong>
          </div>

          <span>I’ll help you decide which role is perfect for you.</span>

          <div className="playbtn">
            <Button text={"Let's Play"} callback={starter} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MenuScreen;
