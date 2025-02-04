import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenuOpened(true);
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="home"
              span
              smooth
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="programs"
              span={true}
              smooth
            >
              Programs
            </Link>
          </li>
          <li
            onClick={() => {
              setMenuOpened(false);
            }}
          >
            Why Us
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="plans"
              span={true}
              smooth
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuOpened(false);
              }}
              to="testmonials"
              span={true}
              smooth
            >
              Testsimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
