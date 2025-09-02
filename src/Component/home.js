import { useNavigate } from 'react-router-dom';
import '../CSS/style.css';
import NewsModal from './newsModal';

function Home(){
  const Navigate=useNavigate();

  function toAboutUsPage(){
    Navigate('/about');
  }
    return(
        <div>
          <NewsModal/>
        <section id="home" className="home">
          <h1>Bring your Business Online</h1>
          <h2>with GenkaiX IT Services</h2>
          <div className="wave wave1" />
          <div className="wave wave2" />
          <div className="wave wave3" />
        </section>
        <section id="about" className="about">
          <h1 className="heading">GenkaiX — Extend limits</h1>
          <div className="row">
            <div className="content">
              <h3>We make creativity work for your brand!</h3>
              <p>Ours is a team of creatives that is brainstorming on great ideas,<b> all. the. time.</b><br />
                With our skills put together, you get an ensemble capable of doing anything and everything your brand needs.</p>
              <a ><button className="btn" onClick={toAboutUsPage}>About Us</button></a>
            </div>
          </div>
        </section>
      </div>
    )
}
export default Home;