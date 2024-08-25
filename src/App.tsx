import Background from "./modules/Background";
import "./global.css";
import Home from "./modules/Home";

function App() {
  return (
    <div style={{ height: "100dvh", width: "100%" }}>
      <Background />
      <div style={{ height: "100%", overflow: "auto" }}>
        <div style={{ paddingInline: "5vh" }}>
          <h1 style={{ color: "white", padding: "0", margin: 0 }}>
            Harsha's Portfolio
            <span style={{ color: "#00eeff" }}> Coming Soon</span>
          </h1>
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;
