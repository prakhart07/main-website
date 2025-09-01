import { useNavigate } from 'react-router-dom';
import '../CSS/style.css';

function Footer(){

    const Navigate=useNavigate();

    function toCareerPage(){
    Navigate('/career');
  }

  function toHomePage(){
    Navigate('/home');
  }
  function toContactPage(){
    Navigate('/contact');
  }
  function toServicePage(){
    Navigate('/services');
  }
  function toAboutUSPage(){
    Navigate('/about');
  }

    return(
        <div className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>About Us</h4>
                <ul>
                    <li><i className="ion-ios-arrow-forward" /><a onClick={toHomePage}>home</a></li>
                    <li><i className="ion-ios-arrow-forward" /><a onClick={toAboutUSPage}>about</a></li>
                    <li><i className="ion-ios-arrow-forward" /><a onClick={toServicePage}>services</a></li>
                    {/* <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#team">team</a></li> */}
                    <li><i className="ion-ios-arrow-forward" /><a onClick={toCareerPage}>career</a></li>
                    <li><i className="ion-ios-arrow-forward" /><a onClick={toContactPage}>contact</a></li>
                    {/* <li><a href="#faq">FAQ</a></li> */}
                  <li><i className="ion-ios-arrow-forward" /> <a href="#">Terms &amp; condition</a></li>
                  <li><i className="ion-ios-arrow-forward" /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="ion-ios-arrow-forward" /> <a href="#portfolio">InternShips</a></li>
                  <li><i className="ion-ios-arrow-forward" /> <a href="#team">Courses</a></li>
                  <li><i className="ion-ios-arrow-forward" /> <a href="careers.html">Testimonials</a></li>
                  <li><i className="ion-ios-arrow-forward" /> <a href="#contact">Contact</a></li>
                  <li><i className="ion-ios-arrow-forward" /> <a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact" style={{fontSize: '1.5rem'}}>
                <h4>Contact Us</h4>
                <p>
                  1st Floor G.T. Mansion<br />
                  Patnipura Main Road,<br/>
                  Above Relaxo Footwear<br />
                  Indore, Madhya Pradesh<br />
                  <strong>Phone:</strong> +91-7999632018<br />
                  <strong>Email:</strong> info@genkaix.com<br />
                </p>
                <div className="social-links d-flex align-items-center flex-row flex-nowrap gap-2">
                  <a ><i className="bi bi-linkedin" /></a>
                  <a ><i className="bi bi-facebook" /></a>
                  <a ><i className="bi bi-instagram" /></a>
                  <a ><i className="bi bi-twitter" /></a>
                  <a ><i className="bi bi-youtube" /></a>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Subscription</h4>
                <p>With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything Your Brand Needs. Subscribe Here To Get Our Latest Updates.</p>
                <form action method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 copyright" style={{color: '#fff', fontSize: '1.3rem'}}>
              Copyright © 2021 IT Company Website. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    )
}
export default Footer;