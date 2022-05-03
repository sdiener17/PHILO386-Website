import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function InfoNavBar({currentInfoPage, setCurrentInfoPage}) {
  const location = useLocation();
  //var to get the current page the user is on for highlighting that page
  //on the navbar
  let pageName = location.pathname.replaceAll("/", "");
  const [homeLit, setHomeLit] = useState(false);
  const [registerLit, setRegisterLit] = useState(false);
  //the current page the user is on. If they're on the homepage, replace
  //the empty string with "home", otherwise use 'pageName'
//   const [currentPage, setCurrentPage] = useState(
//     pageName === "" ? "home" : pageName
//   );
  //const [currentPage, setCurrentPage] = useState("informationhome");
  return (
    <SideWrapper>
      <ul>
        <li key={1}>
          <div
            className={
              "sidebar-link " + (currentInfoPage === "informationip" ? "lit" : "unlit")
            }
            id="informationipLink"
            onClick={() => setCurrentInfoPage("informationip")}
          >
            Intellectual Property Basics
          </div>

          <div
            className={
              "sidebar-link " +
              (currentInfoPage === "informationsaip" ? "lit" : "unlit")
            }
            id="informationsaipLink"
            onClick={() => setCurrentInfoPage("informationsaip")}
          >
            Software and Intellectual Property
          </div>

          <div
            className={
              "sidebar-link " + (currentInfoPage === "informationpiracy" ? "lit" : "unlit")
            }
            id="informationpiracyLink"
            onClick={() => setCurrentInfoPage("informationpiracy")}
          >
            Piracy
          </div>
        </li>
      </ul>
    </SideWrapper>
  );
}

const SideWrapper = styled.div`
    height: 180px;
    //background: var(--secondarySiteColor);
   transition: var(--mainTransition);
  font-size: 14px !important;
  font-weight: bold;
  margin: 10px 10px 10px 15px;
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    //font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    font-size: 14px;
    transition: var(--mainTransition);
    text-decoration: none;
    width: 80%;
    transition-duration: 0.6s;
  }
  .sidebar-link:hover {
    background: var(--primarySiteColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.2rem 0.5rem 1.4rem;
    text-decoration: none;
    cursor: pointer;
  }
  .lit {
    color: var(--mainWhite);

    background: var(--primarySiteColor);
  }
  .unlit {
    color: var(--mainWhite);
    background: var(--secondarySiteColor);
  }
`;
