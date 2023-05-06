import './App.css';
import Scale from './Scale';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Scale>
        <Header />
        {/* <Container /> */}
        <Registration />
        <br></br>
        <Login />
      </Scale>
    </div>
  );
}

export default App;
