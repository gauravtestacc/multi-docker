import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="app-title">Welcome to React</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
