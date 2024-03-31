import { BrowserRouter } from "react-router-dom";
import "./global.css";
import Background from "./modules/Background";

function App() {
  return (
    <>
      <Background />
      <BrowserRouter>
        <div style={{ padding: "5vh" }}>
          <h1 style={{ color: "white", padding: "auto" }}>
            Harsha's Resume{" "}
            <span style={{ color: "#00eeff" }}> Coming Soon</span>
          </h1>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
