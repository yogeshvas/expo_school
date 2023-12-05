import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { TbSettingsCheck } from "react-icons/tb";
import { IoArrowBackCircle } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <>
      <Section>
        <div className="mainNav">
          <div className="perf">
            <NavLink to="/" onClick={() => handleNavLinkClick("/")}>
              <div
                style={{ display: "inline", width: "15rem" }}
                className={`card ${activeLink === "/" ? "Isactive" : ""}`}
              >
                {activeLink === "/" && <IoSpeedometerSharp />}
                <span style={{ margin: "1rem" }}>Performance</span>
              </div>
            </NavLink>
          </div>
          <div className="attend">
            <NavLink
              to="/attendance"
              onClick={() => handleNavLinkClick("/attendance")}
            >
              <div
                style={{ display: "inline", width: "15rem" }}
                className={`card ${
                  activeLink === "/attendance" ? "Isactive" : ""
                }`}
              >
                {activeLink === "/attendance" && <BsFillPeopleFill />}{" "}
                <span style={{ margin: "1rem" }}>Attendance</span>
              </div>
              <div className="head"></div>
            </NavLink>
          </div>
          <div className="contest">
            <NavLink
              to="/contest"
              onClick={() => handleNavLinkClick("/contest")}
            >
              <div
                style={{ display: "inline", width: "15rem" }}
                className={`card ${
                  activeLink === "/contest" ? "Isactive" : ""
                }`}
              >
                {activeLink === "/contest" && <TbSettingsCheck />}
                <span style={{ margin: "1rem" }}>Contest</span>
              </div>
            </NavLink>
          </div>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 0 28rem;
  margin-top: 2rem;
  transition: 0.15s;
  .mainNav {
    display: flex;
    justify-content: space-around;
  }

  .card {
    transition: 0.5s;
    background-color: rgba(225, 224, 250, 1);
    padding: 1rem;
    border-radius: 1rem;
    width: 15rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: "white";
  }

  .Isactive {
    .card {
      width: 15rem;
    }
    /*   */
    color: white;
    background-color: rgba(39, 35, 114, 1);
  }
`;

export default Navbar;
