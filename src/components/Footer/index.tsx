import './styles.scss';
import { Linkedin } from '../linkedin';
import { Instagram } from '../instagram';
import { Twitter } from '../twitter';
import { Tiktok } from '../tiktok';

function Footer() {

  return (

    <footer>
      <div className="first-footer">
        <div className="medias-container">
          <h1>Subscribe to our newsletter</h1>
          <button>{`>`}</button>
        </div>
        <div className="icons-media">
          <div className="circle-media"><Linkedin /></div>
          <div className="circle-media"> <Tiktok /></div>
          <div className="circle-media"><Instagram /></div>
          <div className="circle-media"><Twitter /></div>
        </div>
      </div>
      <div className="second-footer">
        <div className="contacts">
          <div>
            <h3>For general inquiries on our services</h3>
            <h2>hello@summerlymedia.com</h2>
          </div>
          <div>
            <h3>To apply as a content creator or team member</h3>
            <h2>creatores@summerlymedia.com</h2>
          </div>
        </div>
        <div className="links-footer">
        <nav className='services-footer'>
            <a>Portfolio</a>
            <a>What we offer</a>
            <a>How it works</a>
            <a>Contact us</a>
          </nav>
          <nav className='rights-footer'>
            <a>Privacy</a>
            <a>Terms</a>
          </nav>
        </div>
      
      </div>

    </footer>

  );
}

export default Footer;
