import { useEffect, useState } from "react";
import "./App.css";

const colors = ["red", "green"];

function App() {
  const [rectangle, setRectangle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRectangle((v) => (v === 1 ? 0 : v + 1));
    }, 1000);

    // clearInterval(interval)
  }, []);

  return (
    <div className="App" style={{ backgroundColor: colors[rectangle] }}></div>
  );
}

export default App;
