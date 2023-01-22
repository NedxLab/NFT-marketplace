import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { MdAlarm } from "react-icons/md";
import DummyData from "../DummyData";

const Auction = () => {
  var datas = DummyData;
  const [time, setTime] = useState("");
  const [data, setData] = useState();
  const [avatar, setAvatar] = useState("");
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  var now = new Date().getTime();
  var distance, days, hours, minutes, seconds;
  setInterval(() => {
    setData(datas);

    // Find the distance between now and the count down date
    distance = countDownDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setTime(hours + "h " + minutes + "m " + seconds + "s ");
  }, 1000);

  const navigate = useNavigate();

  return (
    <div className="auction" id="auctions">
      <div className="auction-wrapper">
        <div className="header">
          <div className="header-1">
            <div className="h-1">Live Auctions</div>
            <div className="h-2">
              Complete with others to get the rarest NFT items
            </div>
          </div>

          <div className="header-2">
            <Link to="auction">Explore More</Link>
          </div>
        </div>

        <div className="auctions">
          {data &&
            data.map((item, id) => (
              <div className="a-box" key={item.id}>
                <div className="img">
                  <div className="img-box">
                    <img width={200} height={170} src={item.imageId} alt="" />
                  </div>
                  <div className="countdown">
                    <MdAlarm color="black" className="white" />
                    <p>
                      {Math.floor(
                        ((item.countdown - now) % (1000 * 60 * 60 * 24)) /
                          (1000 * 60 * 60)
                      ) +
                        "h " +
                        Math.floor(
                          ((item.countdown - now) % (1000 * 60 * 60)) /
                            (1000 * 60)
                        ) +
                        "m " +
                        Math.floor(
                          ((item.countdown - now) % (1000 * 60)) / 1000
                        ) +
                        "s "}
                    </p>
                  </div>
                </div>
                <div className="title">
                  <h4>{item.title}</h4>
                  <BsThreeDots className="options" />
                </div>

                <div className="details">
                  <div className="info">
                    <div className="avatar">
                      <img src={item.pic} className="avatar" alt={item.pic} />
                    </div>
                    <div className="user">
                      <div className="owner">Created by</div>
                      <div className="name">{item.owner}</div>
                    </div>
                  </div>

                  <div className="price">{item.price}ETH</div>
                </div>
                <div
                  className="place-bid"
                  onClick={() => navigate(`/auction/item/${item.title}`)}
                >
                  Mint
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
