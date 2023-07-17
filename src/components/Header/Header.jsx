import './Header.css'
import { Navigate, Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <div className="App-header">
        <div className='header-left-side'>
          <Link className='logo' to="/"></Link>
          <Link className='how-it-works' to="/howitworks">როგორ მუშაობს</Link>
          <div className='browse-job'>სამსახურის დამატება</div>
        </div>

        <div className='header-right-side'>
          <div className='reg'>
            <Link className='login' to="/login">შესვლა</Link>
            <Link className='sign-up' to="/signup">რეგისტრაცია</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header;