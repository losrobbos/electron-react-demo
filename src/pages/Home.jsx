import { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState(window.main?.count.default || 0);

  const handleTelefonierenNachHause = async () => {
    console.log("Yayyy. From Renderer");
    const pingResult = await window.main?.ping();
    console.log(pingResult);
  };

  return (
    <>
      <p>Hello Electron + React!</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
        <button onClick={handleTelefonierenNachHause}>
          Nach Hause telefonieren
        </button>
        <button
          onClick={() => window.main?.dbUpdate({ username: "robbos" + count })}
        >
          Nach Hause Daten senden
        </button>
      </div>
      <div>
        Node Version: <span>{window.main?.versions.node()}</span>
      </div>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </p>
    </>
  );
};
