import { useEffect, useState } from 'react';
import '../CSS/style.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/genkaix.png';

function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const Navigate=useNavigate();
  const toggleMenu = () => {

    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toCareerPage(){
    Navigate('/career');
    toggleMenu();
  }

  function toHomePage(){
    Navigate('/');
    toggleMenu();
  }
  function toContactPage(){
    Navigate('/contact');
    toggleMenu();
  }
  function toServicePage(){
    Navigate('/services');
    toggleMenu();
  }
  function toAboutUSPage(){
    Navigate('/about');
    toggleMenu();
  }

    return(
       <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <a onClick={toHomePage} className="main-logo">
              <img src={logo} alt="Logo" />
            </a>


            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
            <i className={`fa ${menuOpen ? "fa-arrow-left" : "fa-bars"}`}  onClick={toggleMenu}></i>
              <ul>
                <li><a onClick={toHomePage}>home</a></li>
                <li><a onClick={toAboutUSPage}>about</a></li>
                <li><a onClick={toServicePage}>services</a></li>
                {/* <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#team">team</a></li> */}
                <li><a onClick={toCareerPage}>career</a></li>
                <li><a onClick={toContactPage}>contact</a></li>
                {/* <li><a href="#faq">FAQ</a></li> */}
              </ul>
            </nav>
    </header>
    )
}
export default Header;