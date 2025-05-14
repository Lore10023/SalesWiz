import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink} from 'react-router-dom';
//import { GrLanguage } from "react-icons/gr";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { useLocation } from "react-router-dom";


function Navbar() {

  const [navActive, setNavActive] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [helpOpen, setHelpOpen] = useState(false);
  // const [language, setLanguage] = useState("en");
  // const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup","/about"];

   useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme); // persist theme
  }, [theme]);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // const toggleLanguageOptions = () => setShowLanguageOptions(!showLanguageOptions);

  // const changeLanguage = (lang) => {
  //   setLanguage(lang);
  //   setShowLanguageOptions(false);
  // };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null; // Do not render navbar
  }

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img className="logo-image" src={theme === "light" ? "./img/logo.png" : "./img/logo2.png"} alt="SalesWiz Logo" />
      </div>
      <a
        role="button"
        tabIndex="0"
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Features"
              className="navbar--content"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Solution"
              className="navbar--content"
            >
              Solution
            </Link>
          </li>
          <li>
            <RouterLink
              to="about"
              onClick={closeMenu}
              className="navbar--content"
            >
              About
            </RouterLink>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
          <li className="help-dropdown">
            <span onClick={() => setHelpOpen(!helpOpen)} className="navbar--content">Help ▾</span>
            {helpOpen && (
              <ul className="dropdown-menu">
                <li><RouterLink to="/help/getting-started">Getting Started</RouterLink></li>
                <li><RouterLink to="/help/ai-assistant">How to Use the AI Assistant</RouterLink></li>
                <li><RouterLink to="/help/data-integration">Data Import & Integration</RouterLink></li>
                <li><RouterLink to="/help/forecasting">Forecasting Explained</RouterLink></li>
                <li><RouterLink to="/help/faqs">FAQs</RouterLink></li>
                <li><RouterLink to="/contact">Contact Support</RouterLink></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="iconsss">
        {/* <div onClick={toggleLanguageOptions} className="icon-button">
          <GrLanguage />
          {showLanguageOptions && (
            <div className="language-dropdown">
              <div onClick={() => changeLanguage("en")}>English</div>
              <div onClick={() => changeLanguage("ro")}>Română</div>
            </div>
          )}
        </div> */}
        {theme === "light" ? (
          <div onClick={toggleTheme} className="icon-button">
            <MdOutlineNightlight />
          </div>
        ) : (
          <div onClick={toggleTheme} className="icon-button">
            <CiLight />
          </div>
        )}
      </div>


      <RouterLink
        to="/login"
        onClick={closeMenu}
        className="login-btn"
      >
        Login
      </RouterLink>
      <RouterLink
        to="/signup"
        onClick={closeMenu}
        className="started-btn"
      >
        Get Started
      </RouterLink>
    </nav>
  );
}

export default Navbar;