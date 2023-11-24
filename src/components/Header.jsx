import React from "react";
import { HashLink } from "react-router-hash-link";

import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./Header.css";

const Header = () => {
  return (
    <nav id="header2">
      <main1 className="this">
        <div className="dropdown">
          <HashLink to={"/brands"}>
            Brands
            <ArrowDropDownIcon />
          </HashLink>
          <div className="dropdown-content">
            <HashLink to={"/all-brands"}>all brands</HashLink>
            <HashLink to={"/bitfins"}>bitfins</HashLink>
            <HashLink to={"/cardano"}>cardano stonerz club</HashLink>
            <HashLink to={"/crypto"}>cryptoraggies</HashLink>
            <HashLink to={"/fest"}>future fest</HashLink>
          </div>
        </div>
        <HashLink to={"/shop"}>
          Shop
          <ArrowDropDownIcon />
        </HashLink>
        <HashLink to={"/#about"}>premium</HashLink>
        <HashLink to={"/#brands"}>gift cards</HashLink>
      </main1>
      <main2>
        <HashLink to={"/"}>DemoApp</HashLink>
      </main2>
      <main3 style={{ display: "flex", alignItems: "center" }}>
        <HashLink to={"/become-an-affiliate"}>Become an affiliate</HashLink>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon style={{ color: "white" }} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon style={{ color: "white" }} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PersonOutlineIcon style={{ color: "white" }} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SearchIcon style={{ color: "white" }} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShoppingBagIcon style={{ color: "white" }} />
        </a>
      </main3>
    </nav>
  );
};

export default Header;
