import React, { useState } from "react";
import ReactDOM from "react-dom";
import SwitchScreen, {
  INPUT_SCREEN,
  OUTPUT_SCREEN
} from "./screens/SwitchScreen";

function App() {
  const [screen, setScreen] = useState(INPUT_SCREEN);

  return (
    <>
      <SwitchScreen screen={screen} />
      <hr />
      <div>
        <button onClick={() => setScreen(INPUT_SCREEN)}>Ir para Input</button>
        <button onClick={() => setScreen(OUTPUT_SCREEN)}>Ir para Input</button>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
