import './Header.css'

function Header(){
    return(
        <div className="App-header">
        <div className='header-left-side'>
          <div className='logo'></div>
          <div className='how-it-works'>how it works</div>
          <div className='browse-job'>browse job</div>
        </div>

        <div className='header-right-side'>
          <div className='log-in'>Log In</div>
          <div className='sign-up'>Join</div>
        </div>
      </div>
    )
}

export default Header;