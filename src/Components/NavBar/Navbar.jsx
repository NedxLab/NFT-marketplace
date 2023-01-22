import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/nft.png";
import { CiSearch } from "react-icons/ci";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import man from "../../Assets/man.jpg";

const variants = {
  open: { height: 500, opacity: 1, display: "flex" },
  closed: {
    height: 0,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};

const Navbar = () => {
  const location = useLocation();

  const [layout, setLayout] = useState(false);
  const [opennav, setOpenNav] = useState(false);
  const [openprofile, setOpenProfile] = useState(false);

  const handleClick = () => {
    setOpenNav(!opennav);
  };

  const handleClose = () => {
    setOpenNav(false);
  };

  const handleOpenProfile = () => {
    setOpenProfile(!openprofile);
  };

  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  const login = () => {
    localStorage.setItem("user", true);
    window.location.reload();
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const hamOPen = <FaBars onClick={handleClick} className="hamburger" />;
  const hamClose = <FaTimes onClick={handleClick} className="hamburger" />;

  // const changeLayout = () => {
  //   if (window.scrollY >= 20) {
  //     setLayout(true);
  //   } else {
  //     setLayout(false);
  //   }
  // };

  // window.addEventListener("click", handleCloseProfile);

  // window.addEventListener("scroll", changeLayout);

  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={Logo} width={30} alt="homepage" />
              {/* <p>Webify</p> */}
            </Link>
          </div>

          <div className="searchbar">
            <input type="search" name="search" placeholder="Search" />
            <CiSearch className="search-icon" />
          </div>

          <div className="links">
            <a href="/#join" onClick={handleClose}>
              Join us
            </a>
            <a href="/#auctions" onClick={handleClose}>
              Auctions
            </a>
            <a href="/#prices" onClick={handleClose}>
              Market Prices
            </a>
            <a href="/#collections" onClick={handleClose}>
              Top Collections
            </a>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0, display: "none" }}
            animate={opennav ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="links-active"
          >
            <a href="/#join" onClick={handleClose}>
              Join us
            </a>
            <a href="/#auctions" onClick={handleClose}>
              Auctions
            </a>
            <a href="/#prices" onClick={handleClose}>
              Market Prices
            </a>
            <a href="/#collections" onClick={handleClose}>
              Top Collections
            </a>
            <div className="flex-avatar" onClick={handleOpenProfile}>
              <img className="flex-avatar" src={man} alt="" />
            </div>
            <div className="profile-box">
              <Link className="profile-name" onClick={handleClose}>
                Thomas Henderson
              </Link>
              <Link
                to="/createnft"
                className="create-nft"
                onClick={handleClose}
              >
                Create New NFT
              </Link>
              <Link className="display-nfts" onClick={handleClose}>
                Display NFTs
              </Link>
              <Link className="settings" onClick={handleClose}>
                Settings
              </Link>
              <button className="logout" onClick={logout}>
                Log Out
              </button>
            </div>
          </motion.div>

          {location.pathname === "/" ? null : (
            <div className="mint-cart">
              <MdOutlineShoppingBasket />
              <p>0</p>
            </div>
          )}

          {localStorage.getItem("user") ? (
            <div className="profile-box">
              <div className="profile-box-avatar" onClick={handleOpenProfile}>
                <img className="profile-box-avatar" src={man} alt="" />
              </div>
              {openprofile ? (
                <div className="profile-box-options">
                  <Link className="profile-name" onClick={handleCloseProfile}>
                    Thomas Henderson
                  </Link>
                  <Link
                    to="/createnft"
                    className="create-nft"
                    onClick={handleCloseProfile}
                  >
                    Create New NFT
                  </Link>
                  <Link className="display-nfts" onClick={handleCloseProfile}>
                    Display NFTs
                  </Link>
                  <Link className="settings" onClick={handleCloseProfile}>
                    Settings
                  </Link>
                  <button className="logout" onClick={logout}>
                    Log Out
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <button type="button" className="login-button" onClick={login}>
              Log In
            </button>
          )}

          {opennav ? hamClose : hamOPen}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
