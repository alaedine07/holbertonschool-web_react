import HolbertonLogo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App-header">
        <img src={HolbertonLogo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="password" id="password">Password: </label>
        <input type="password" name="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p> {getFullYear()} - {getFooterCopy()} </p>
      </div>
    </div>
  );
}

export default App;