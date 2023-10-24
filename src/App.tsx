import './App.scss';
import { Logo } from './components/logo';
import { Arrow } from './components/arrow-icon';

function App() {
  return (
    <main>
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
    </main>
  );
}

export default App;
