import React, { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// import RemoteApp from "remote/App";
// const RemoteApp = React.lazy(
//   () =>
//     new Promise((resolve) =>
//       setTimeout(async () => resolve(await import("remote/App")), 5000)
//     )
// );
const RemoteApp = React.lazy(() => import("remote/App"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense fallback={<div>Remote Loading...</div>}>
        <RemoteApp />
      </Suspense>
    </div>
  );
}

export default App;
