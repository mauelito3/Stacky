// components
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Button from "../components/Button";

function MenuScreen({ starter }) {
  const btnsStyle = {
    width: 400,
    maxWidth: "90dvw",
    margin: "auto",
    marginTop: 50,
  };
  return (
    <>
      <Logo size={140} top={200} tag={false} fs={50} />

      <div style={btnsStyle}>
        <Button text={"Let's Play"} callback={starter} />
      </div>
      <Footer />
    </>
  );
}

export default MenuScreen;
