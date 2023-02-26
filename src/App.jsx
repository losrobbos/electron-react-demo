import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState( window.main.count.default || 0 )

  const handleTelefonierenNachHause = async () => {
    console.log("Yayyy. From Renderer")
    const pingResult = await window.main.ping()
    console.log(pingResult)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Electron + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button onClick={handleTelefonierenNachHause}>Nach Hause telefonieren</button>
          <button onClick={ () => window.main.dbUpdate({ username: "robbos" + count }) }>
            Nach Hause Daten senden
          </button>
        </p>
        <div>
          Node Version: <span>{window.main.versions.node()}</span>
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
      </header>
    </div>
  );
}

export default App
