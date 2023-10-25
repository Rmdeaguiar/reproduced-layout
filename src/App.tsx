import './App.scss';
import { Logo } from './components/logo';
import { Arrow } from './components/arrow-icon';
import { useState } from 'react';
import { Interface } from 'readline';

function App() {

  type About = {
    title: string,
    emoji: string
  }

  const aboutClient: About[] = [
    { title: 'Products', emoji: '📦' }, { title: 'Services', emoji: '🤝' }, { title: 'SaaS', emoji: '🖥️' }, { title: 'Personality', emoji: '🤳' }, { title: 'Other', emoji: '🤔' }
  ]




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
      <div className="customer-container">
        <div className="heading-customer">
          <h1>We want to get to know you 😊</h1>
          <h3>01/05</h3>
        </div>
        <div className="info-customer">
          <h3>Hi!😉 What best explains you?</h3>
        </div>
        <div className="options-container">
          {aboutClient.map((about) => (
            <div key={about.title} className='about-customer'>
              <p>{about.title}</p>
              <p>{about.emoji}</p>
            </div>
          ))}
        </div>
        <div className='footer-customer'>
        <button>Next</button>
        </div>
      </div>
    </main>
  );
}

export default App;
