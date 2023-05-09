import './App.css';
import Scale from './Scale';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Scale>
          <Header />
          <Container />
        </Scale>
      </Router>
    </div>
  );
}

export default App;
