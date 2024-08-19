import "./header.css";
import Logo from "../../common/Logo";
import NavMenu from "./NavMenu";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function mobileNavToogle() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    document.querySelector("body").classList.toggle("mobile-nav-active");
  }
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <Logo />

          <nav id="navmenu" className="navmenu">
            <NavMenu />
            <i
              className={`mobile-nav-toggle d-xl-none bi bi-list`}
              onClick={mobileNavToogle}
            ></i>
          </nav>

          <a className="btn-getstarted" href="#about">
            Get Started
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
