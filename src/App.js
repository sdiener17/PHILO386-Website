import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import InformationPage from "./components/InformationPage";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <PageWrapper>

        <Header />
          <div className="contentWrapper">
            <NavBar />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={<HomePage/>}
              />

            </Routes>
          </div>
        <div className="separaterBottomFooter" />
        <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  .separaterBottomFooter {
    margin-bottom: 60px;
  }
  //display:flex;
  height: 100%;
  .contentWrapper {
    display: flex;
    flex-direction: row;
    align-items: left;
  }
`;
