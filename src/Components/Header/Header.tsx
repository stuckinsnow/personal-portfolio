import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { animateLetters, useToggleClass } from '../../utils/functions';

import './Header.scss';

const Header: React.FC = () => {
  const [isHamburgerOpen, toggleHamburger, isHamburgerClicked, setIsHamburgerClicked] = useToggleClass(false);
  const [delayedItems, setDelayedItems] = useState<number[]>([]);
  const delayedItemsTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (isHamburgerOpen) {
      const navItems = document.querySelectorAll('.navbar__item');
      const delayTime = 500;

      delayedItemsTimeoutsRef.current = Array.from(navItems).map((item, index) =>
        setTimeout(() => {
          setDelayedItems((prevItems) => [...prevItems, index]);
        }, delayTime * index)
      );
    } else {
      setDelayedItems([]);
    }

    return () => {
      delayedItemsTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [isHamburgerOpen]);

  const handleNavLinkClick = () => {
    if (isHamburgerOpen) {
      toggleHamburger();
      setIsHamburgerClicked(true);
    }
  };

  useEffect(() => {
    animateLetters('.link-animate');
  })

  return (
    <div id='c-header'>
      <Link className="head-logo" to={"/"} onClick={handleNavLinkClick}>
        {/* <span>Philip's </span><span>portfolio</span> */}
      </Link>

      {/* Navbar */}
      <nav className={`navbar ${isHamburgerOpen ? 'active' : ''}`}>
        <ul className='navbar__list'>
          <li className={`navbar__item navbar__item-1 navbar__item-1`}>
            <Link to="/contact" className="navbar__link navbar__link--request" onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
          <li className={`navbar__item navbar__item-2 ${delayedItems.includes(1) ? 'delay' : ''}`}>
            <NavLink to="/" className="navbar__link link-animate" onClick={handleNavLinkClick} >
              Home
            </NavLink>
          </li>
          <li className={`navbar__item ${delayedItems.includes(2) ? 'delay' : ''}`}>
            <NavLink to="/projects" className="navbar__link link-animate" onClick={handleNavLinkClick} >
              Projects
            </NavLink>
          </li>
          <li className={`navbar__item ${delayedItems.includes(3) ? 'delay' : ''}`}>
            <NavLink to="/about" className="navbar__link link-animate" onClick={handleNavLinkClick} >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger menu */}
      <div className={`hamburger ${isHamburgerOpen ? 'active' : ''}`} onClick={toggleHamburger}>
        <span className="hamburger__bar hamburger__bar-1"></span>
        <span className="hamburger__bar hamburger__bar-2"></span>
        <span className="hamburger__bar hamburger__bar-3"></span>
      </div>
    </div>
  );
}

export default Header;

