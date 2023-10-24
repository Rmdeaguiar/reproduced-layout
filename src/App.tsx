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
      <div className="content-container">
        <div className="title-container">
          <h2>Let's grow your</h2>
          <h2>social presence.</h2>
        </div>
        <div className="bubble">
          <div className="bubble target">🎯</div>
          <div className="bubble shopping">🛍️</div>
          <div className="bubble rocket">🚀</div>
          <div className="bubble fire">🔥</div>
        </div>
      </div>
    </main>
  );
}

export default App;
