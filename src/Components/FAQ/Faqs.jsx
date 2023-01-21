import React from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const Faqs = () => {
  return (
    <div className="faqs">
      <div className="faqs-wrapper">
        <div className="container1">
          <div className="head1">FAQs</div>
          <div className="head2">What people usually ask</div>
        </div>
        <div className="accordion">
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to buy NFTs?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Some NFT marketplaces, such as Nifty Gateway and NBA Top Shot,
              accept credit cards for NFT payments. But many other NFT
              marketplaces may require cryptocurrency to make purchases. On any
              platform, though, you'll need a crypto wallet to get started
              buying NFTs.
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to create NFTs?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Decide what type of NFT you want to create. NFTs are versatile—you
              have plenty of options for choosing which type you want to create.
              .
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to join the auction?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              We sell NFTs at public auction via our website, and private treaty
              sales. Check the auction schedule for upcoming auctions, plus NFTs
              you can buy now.
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              How to sell NFTs?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              Can you make money selling NFTs? The direct and effective method
              of making money with NFTs is to create and sell them. Yes, you can
              create and sell anything digital such as arts, images, videos,
              memes, properties, etc., as NFTs. If you have a notch to
              creativity, you can monetize all your creations by selling them as
              NFT.
            </AccordionDetails>
          </Accordion>
          <Accordion id="accordion-body">
            <AccordionSummary
              expandIcon={<FaAngleDown className="angle" />}
              id="panel1a-header"
            >
              Are NFTs good investment?
            </AccordionSummary>
            <AccordionDetails id="accordion-details">
              NFTs are digital assets that act as secure documentation of
              ownership and can be a worthwhile investment for collectors.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
