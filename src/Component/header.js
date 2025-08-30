import { useEffect, useState } from 'react';
import '../CSS/style.css';
import { useNavigate } from 'react-router-dom';
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
  }

  function toHomePage(){
    Navigate('/');
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
       <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a href="#" className="logo">
        <img src="./images/image.png" alt="Logo" />
      </a>

      <i className="fas fa-bars"></i>

      <nav className="navbar">
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