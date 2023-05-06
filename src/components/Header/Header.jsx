import { useState } from 'react';
import './Header.css'
import Registration from '../Registration/Registration';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isShown, setIsShown] = useState(false);


  return (
    <div>
      <div className="App-header">
        <div className='header-left-side'>
          <div className='logo'></div>
          <div className='how-it-works'>how it works</div>
          <div className='browse-job'>browse job</div>
        </div>

        <div className='header-right-side'>
          <div className='log-in'>Log In</div>
          <div>
            <button className='sign-up' onClick={(e) => setIsShown(true)}>
              Join
            </button>
          </div>
        </div>
      </div>
      <Registration style={{ display: isShown ? 'block' : 'none' }} />
    </div>

  )
}

export default Header;