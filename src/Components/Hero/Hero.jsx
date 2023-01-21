import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineCompass } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import HeroImages from "../HeroDisplayImages/HeroImages";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="section1">
          <section>
            <div className="head">
              <h1>Invest and Earn through</h1>
              <span>the work of Art.</span>
            </div>
            <div className="head2">
              Find the most attractive and rarest NFTs to be your collection
            </div>
            <div className="head3">
              <Link>
                <AiOutlineCompass /> <span>Explore</span>
              </Link>

              <Link>
                <span>Learn More</span>
                <FaAngleRight />
              </Link>
            </div>
          </section>
        </div>

        <div className="sections2">
          <HeroImages />
        </div>
      </div>
    </div>
  );
};

export default Hero;
