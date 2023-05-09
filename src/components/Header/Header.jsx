import './Header.css'
import { useState } from 'react';
import Registration from '../Registration/Registration';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import Login from '../Login/Login';
import App from '../../App';  


function Header() {
  const [isShown, setIsShown] = useState(false);

  const navigate = useNavigate();
  const navigateLogIn = () => {
    navigate('/login');
  };

  return (
    <div>
      <div className="App-header">
        <div className='header-left-side'>
          <div className='logo'></div>
          <div className='how-it-works'>how it works</div>
          <div className='browse-job'>browse job</div>
        </div>

        <div className='header-right-side'>
          <div className='log-in' onClick={navigateLogIn}>Log In</div>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          <div>
            <button className='sign-up' onClick={(e) => setIsShown(true)}>
              Join
            </button>
          </div>
        </div>
      </div>
      {isShown ? <Registration setIsShown={setIsShown} /> : ''}
    </div>

  )
}

export default Header;