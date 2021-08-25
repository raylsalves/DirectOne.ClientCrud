// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import Content from './components/templates/Content/Content'
import './App.css';
import MenuBar from './components/templates/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Content/>
      <MenuBar/>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
