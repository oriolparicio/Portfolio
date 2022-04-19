import React from 'react';
import './Greeting.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { greeting } from '../../portfolio';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div stickyContainer">
            <div className="stickyElement">
              <h1 className="greeting-text">
                {' '}
                {greeting.title}{' '}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <p
                className="greeting-text-p subTitle"
                style={{ fontSize: '1.4em' }}
              >
                {greeting.subTitle2}
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ fontSize: '1.4em' }}
              >
                {greeting.subTitle3}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="My CV" newTab={true} href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="oriol sitting on table"
              src={require('../../assests/images/imgprofile_ok.jpg')} // manOnTable.svg
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
