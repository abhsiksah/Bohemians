import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { FallingEmojis } from "falling-emojis";
import { AppProvider } from "./context/AppContext";
import Greet from "./components/greetPage/Greet";

function App() {
  const [checkAppSate, setCheckAppSate] = useState(false);

  return (
    <div className="App">
      <FallingEmojis emoji={"🍁"} />

      <AppProvider>
        {checkAppSate ? <Home /> : <Greet setCheckAppSate={setCheckAppSate} />}
      </AppProvider>
    </div>
  );
}

export default App;
