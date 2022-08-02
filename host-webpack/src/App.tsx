import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const RemoteApp = React.lazy(() => import('remote/App'));

function Dummy({ name }: { name: string }) {
  return <p>Host: {name}</p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Suspense fallback={<div>Remote Loading...</div>}>
          <RemoteApp />
        </Suspense>

        {/* <Routes>
          <Route index element={<Dummy name="home" />} />
          <Route path="about" element={<Dummy name="about" />} />
          <Route
            path="remote/*"
            element={
              <Suspense fallback={<div>Remote Loading...</div>}>
                <RemoteApp />
              </Suspense>
            }
          />
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
