import React from "react";

import { Link } from "react-scroll";
import { Link as A } from "react-router-dom";
import Logo from "../../Assets/icon.png";
import { FaDiscord, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="box1">
          <div className="footer-logo">
            <Link to="hero" spy={true} smooth={true}>
              <img src={Logo} width="60" height="60" alt="" />
              <p>NFT MarketPlace</p>
            </Link>
          </div>

          <div className="info">
            This marketplace supports more than 150 different payment tokens, so
            the platform's name is appropriate. For an introduction to the NFT
            world, this is a great place to start.
          </div>
        </div>

        <div className="box2">
          <div className="link1">
            <p>About US</p>
            <div className="links">
              <A>About</A>
              <A>Contact</A>
            </div>
          </div>
          <div className="link2">
            <p>Links</p>
            <div className="links">
              <A>Blog</A>
              <A>Support</A>
            </div>
          </div>
          <div className="link3">
            <p>Community Links</p>
            <div className="links">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>

          <div className="link4">
            <p>Social Media</p>
            <div className="links">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
