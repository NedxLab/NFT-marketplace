import React from "react";

import { Link } from "react-router-dom";

const SuccessPage = ({ props }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="head">Your action was a success 💡</div>
        <Link className="link">Proceed to view NFT</Link>
      </div>
    </div>
  );
};

export default SuccessPage;
