import './styles.scss';
import { Logo } from '../logo';
import { Arrow } from '../arrow-icon';

function Header() {

  return (

      <header className='header-container'>
        <Logo />
        <nav className='menu-options'>
          <a>What we offer</a>
          <a>How it works</a>
          <a>Portfolio</a>
        </nav>
        <button>
          <div className='btn-white'>
            Contact Us
            <Arrow />
          </div>
          <div className='btn-purple'>
            Contact Us
            <Arrow />
          </div>
        </button>
      </header>
    
  );
}

export default Header;
