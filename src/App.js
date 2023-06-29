import './App.css';
import Scale from './Scale';
import Login from './components/Login/Login';
import Join from './components/Join/Join';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import HowItWorks from './components/HowItWorks/HowItWorks';

function App() {
  return (
    <div className="App">
      <Router>
        <Scale>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<Join />} />
            <Route path='/login' element={<Login />} />
            <Route path='/howitworks' element={<HowItWorks />} />
          </Routes>
        </Scale>
      </Router>
    </div>
  );
}

export default App;
