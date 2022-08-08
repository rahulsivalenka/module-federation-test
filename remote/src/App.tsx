import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

function Dummy({ name }: { name: string }) {
  return <p>Remote: {name}</p>;
}

function App() {
  return (
    <>
      <h2>Remote App</h2>

      {['', 'about'].map((path) => (
        <React.Fragment key={path}>
          <Link to={path}>{path || 'home'}</Link>{' '}
        </React.Fragment>
      ))}

      <Routes>
        <Route index element={<Dummy name="home" />} />
        <Route path="about" element={<Dummy name="about" />} />
      </Routes>
    </>
  );
}

export default App;
