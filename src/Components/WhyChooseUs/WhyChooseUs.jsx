import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="reasons">
      <div className="reasons-wrapper">
        <div className="header">
          <div className="head-1">Why You Have To Choose Us?</div>
          <div className="head-2">
            Reasonable reasons to pick us, Here what we offer for you
          </div>
        </div>

        <div className="container">
          <div className="cont-1">
            <div className="h1">1. Smart Contract Solution</div>
            <p>
              A smart contract assigns a distinctive identifier to an NFT.
              Currently, the most preferred is the ERC-721 standard for
              developing non-fungible tokens.{" "}
            </p>
          </div>
          <div className="cont-1">
            <div className="h1">
              2. IPFS (Interplanetary File System) Integration
            </div>
            <p>
              It is a blockchain data storage system that consumes less energy
              for storing digital content.
            </p>
          </div>
          <div className="cont-1">
            <div className="h1">
              3. A User-intuitive Marketplace Application
            </div>
            <p>
              An NFT marketplace should be easy to explore and make it easier
              for users to sell and buy NFTs. Both the client-side and the
              server-side must exist.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
