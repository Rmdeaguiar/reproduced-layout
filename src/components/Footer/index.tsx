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

    </footer>

  );
}

export default Footer;
