import './Header.css'
import { Navigate, Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <div className="App-header">
        <div className='header-left-side'>
          <div className='logo'></div>
          <Link className='how-it-works' to="/howitworks">how it works</Link>
          <div className='browse-job'>browse job</div>
        </div>

        <div className='header-right-side'>
          <div className='reg'>
            <Link className='login' to="/login">Log In</Link>
            <Link className='sign-up' to="/signup">Join</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header;