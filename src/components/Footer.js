import React from "react";
//import {FaBars} from 'react-icons/fa';
import styled from "styled-components";

export default function Footer() {
  return (
    <FootWrapper>
      <div className="FooterMain">
        <p>PHILO 386 Group Project Spring 2022</p>
      </div>
    </FootWrapper>
  );
}

const FootWrapper = styled.div`
  //margin-top: 60px;
  .FooterMain {
    display: flex;
    align-items: center;
    vertical-align: bottom;
    justify-content: space-around;
    flex-direction: row;
    //max-width: 1600px;
    //margin: 5 auto;
    position: -webkit-sticky;
    position: sticky;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 50px;
    //padding: 1rem 1.5rem;
    background: var(--primarySiteColor);
    border-bottom: 5px solid var(--secondarySiteColor);
    z-index: 999;
    color: var(--lightGrey);
  }

  @media screen and (max-width: 500px) {
    .FooterMain {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
`;
