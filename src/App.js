import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Alien from './resources/images/img-2.svg';

function App() {
  return (
    <>
      <nav className='navbar'>
        <a href='/' className='navbar__logo'>
          SAAS
        </a>
        <div className='navbar__bars'>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='navbar__menu'>
          <a href='/' className='navbar__menu--links'>
            Home
          </a>
          <a href='/' className='navbar__menu--links'>
            Products
          </a>
          <a href='/' className='navbar__menu--links'>
            Services
          </a>
          <a href='/' id='button' className='navbar__menu--links'>
            Sign Up
          </a>
        </div>
      </nav>

      <div className='hero'>
        <div className='hero__container'>
          <div className='hero__container--left'>
            <h1>They are coming</h1>
            <h2>Be Prepared</h2>
            <h3>Sign Up</h3>
            <button className='hero__container--btn'>
              <a href='#'>Sign Up</a>
            </button>
          </div>
          <div className='hero__container--right'>
            <img src={Alien} alt='alien' className='hero__container--img' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
