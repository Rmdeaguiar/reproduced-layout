import './styles.scss';
import { useState } from 'react';

function Customer() {
  const [page, setPage] = useState(1);

  type About = {
    title: string,
    emoji: string
  }

  const aboutClient: About[] = [
    { title: 'Products', emoji: '📦' }, { title: 'Services', emoji: '🤝' }, { title: 'SaaS', emoji: '🖥️' }, { title: 'Personality', emoji: '🤳' }, { title: 'Other', emoji: '🤔' }
  ]
  const budgetClient: string[] = ['$1-2k/mo', '$3k-4k/mo', '$5k-7k/mo', '$8k+/mo', 'These are out of my budget'];
  //const startClient: string[] = ['Yesterday', 'Within 2 weeks', 'Within a few months', 'Not for a while'];


function handleBtnNext () {
  setPage(2)
}


function handleBtnPrev () {
  setPage(1)
}

  return (
    <div className="customer-container">
      <div className="heading-customer">
        <h1>We want to get to know you 😊</h1>
        <h3>{page}/2</h3>
      </div>
      <div className="info-customer">
      <h3>{page === 1 ? 'Hi!😉 What best explains you?' : 'Nice👍 What is your monthly budget?'}</h3>
      </div>
      <div className="options-container">
        {page === 1 ? aboutClient.map((about) => (
          <div key={about.title} className={'about-customer appear-up'}>
            <p>{about.title}</p>
            <p>{about.emoji}</p>
          </div>
        )) : 
        aboutClient.map((about) => (
          <div key={about.title} className={'about-customer disappear-down'}>
            <p>{about.title}</p>
            <p>{about.emoji}</p>
          </div>
        ))}

        {page === 2 ? 
           budgetClient.map((budget)=>(
            <div key={budget} className={'about-customer appear-up'}> 
            <p>{budget}</p>
            </div>
          )) : 
          budgetClient.map((budget)=>(
            <div key={budget} className={'about-customer disappear-down'}> 
            <p>{budget}</p>
            </div>
          ))
          }
      </div>
      <div className='footer-customer'>
        <button className={`btn-previous ${page === 1 ? "" : "btn-opacity" }`} onClick={() => handleBtnPrev()}>Previous</button>
        <button className='btn-next' onClick={() => handleBtnNext()}>Next</button>
      </div>
    </div>
  );
}

export default Customer;
