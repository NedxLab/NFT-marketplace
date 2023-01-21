import React from "react";

import Image1 from "../../Assets/smoke.jpg";
import Image2 from "../../Assets/green.jpeg";
import Image3 from "../../Assets/skel.jpeg";
import Image4 from "../../Assets/bow.jpg";
import Image5 from "../../Assets/medusa.png";
import Image6 from "../../Assets/west.jpg";
import Image7 from "../../Assets/Rectangle20.png";
import Image8 from "../../Assets/Rectangle21.png";
import Image9 from "../../Assets/sand.jpg";

const HeroImages = () => {
  return (
    <div className="h-images">
      <div className="h-images-wrapper">
        <div className="firstchild">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
        </div>
        <div className="secondchild">
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
        </div>
        <div className="thirdchild">
          <img src={Image7} alt="" />
          <img src={Image8} alt="" />
          <img src={Image9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
