import SocialCard from "./components/SocialCard";
import profileImg from "./assets/snoopy.jpg";

function App () {
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "26px" }}>Social Card</h1>

      <SocialCard
        name = "kel"
        desc = "GOAT"
        img={profileImg}
        btnText = "Follow"
      />

      <SocialCard
        name = "gelo"
        desc = "DOG"
        img={profileImg}
        btnText = "Message"
      />

      <SocialCard/>
    </>
  );
};

export default App;