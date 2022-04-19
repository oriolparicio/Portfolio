import React from 'react';
import './Header.css';
import { Fade } from 'react-reveal';
import { greeting } from '../../portfolio';
import ScrollToSmooth from '../scrollToSmooth/ScrollToSmooth';

function Header() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a
            href="https://github.com/oriolparicio"
            target="_blank"
            className="logo"
          >
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">
              <div className="logo-name-container">
                <div className="gitHubLogo"></div>
              </div>
            </span>
            <span className="grey-color">/&gt;</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <span
                onClick={() => {
                  ScrollToSmooth(document.querySelector('#skills'));
                }}
              >
                Experience
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  ScrollToSmooth(document.querySelector('#projects'));
                }}
              >
                Projects
              </span>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;
