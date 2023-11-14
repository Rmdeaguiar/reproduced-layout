import './styles.scss';
import { useState } from 'react';

function Customer() {
  const [page, setPage] = useState(1);
  const [subtitleCostumer, setSubtitleCostumer] = useState("");

  const pageContent = (page: number) => {
    switch (page) {
      case 1:
        return <h3>Hi!😉 What best explains you?</h3>;
      case 2:
        return <h3>Nice👍 What is your monthly budget?</h3>;
      case 3:
        return <h3>Anything else you want us to know?</h3>;
      case 4:
        return <h3>Great!🙌 What's your name?</h3>;
      default:
        return null; 
    }
  };

  type About = {
    title: string,
    emoji: string
  }

  const aboutClient: About[] = [
    { title: 'Products', emoji: '📦' }, { title: 'Services', emoji: '🤝' }, { title: 'SaaS', emoji: '🖥️' }, { title: 'Personality', emoji: '🤳' }, { title: 'Other', emoji: '🤔' }
  ]
  const budgetClient: string[] = ['$1-2k/mo', '$3k-4k/mo', '$5k-7k/mo', '$8k+/mo', 'These are out of my budget'];
  //const startClient: string[] = ['Yesterday', 'Within 2 weeks', 'Within a few months', 'Not for a while'];

  function handleBtnNext() {
    if (page < 4) {
      setPage(page + 1)
    }
  }

  function handleBtnPrev() {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className="customer-container">
      <div className="heading-customer">
        <h1>We want to get to know you 😊</h1>
        <h3>{page}/4</h3>
      </div>
      <div className="info-customer">
      {pageContent(page)}
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
          budgetClient.map((budget) => (
            <div key={budget} className={'about-customer appear-up'}>
              <p>{budget}</p>
            </div>
          )) :
          budgetClient.map((budget) => (
            <div key={budget} className={'about-customer disappear-down'}>
              <p>{budget}</p>
            </div>
          ))
        }
        {page === 3 &&
          <textarea placeholder='This is optional...'></textarea>
        }
        {page === 4 &&
          <div className='contacts-client'>
            <input placeholder='Name'></input>
            <input placeholder='Company'></input>
            <input placeholder='Email'></input>
          </div>
        }
      </div>
      <div className='footer-customer'>
        <button className={`btn-previous ${page === 1 ? "" : "btn-opacity"}`} onClick={() => handleBtnPrev()}>Previous</button>
        <button onClick={() => handleBtnNext()}>{page === 4 ? 'Submit' : 'Next'}</button>
      </div>
    </div>
  );
}

export default Customer;
