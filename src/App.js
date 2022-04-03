import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homePage/HomePage";
import InformationPage from "./components/informationPage/InformationPage";
import NavBar from "./components/NavBar";
import SurveyPage from "./components/surveypage/SurveyPage";
import BibliographyPage from "./components/bibliographyPage/BibliographyPage";

export default function App() {

  return (
    <PageWrapper>

        <Header />
          <div className="contentWrapper">
            {/* <NavBar /> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={<HomePage/>}
              />
              <Route
                exact path="/survey"
                element={<SurveyPage/>}
              />
              <Route
                exact path="/information"
                element={<InformationPage/>}
              />
              <Route
                exact path="/bibliography"
                element={<BibliographyPage/>}
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
