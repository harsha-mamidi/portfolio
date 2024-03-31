import Background from "./modules/Background";
import "./global.css";
import Home from "./modules/Home";

function App() {
  return (
    <>
      <Background />
      <div style={{ paddingInline: "5vh" }}>
        <h1 style={{ color: "white", padding: "auto" }}>
          Harsha's Resume
          <span style={{ color: "#00eeff" }}> Coming Soon</span>
        </h1>
      </div>
      <Home />
    </>
  );
}

export default App;
