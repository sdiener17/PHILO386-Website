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
import SurveyResults from "./components/surveypage/SurveyResults";

export default function App() {
  const [isSurveySubmitted, setIsSurveySubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

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
                className="routeCenter"
              />
              <Route
                exact path="/survey"
                element={<SurveyPage setIsSurveySubmitted={setIsSurveySubmitted} setUserAnswers={setUserAnswers}/>}
                className="routeCenter"
              />
              <Route
                exact path="/information"
                element={<InformationPage/>}
                className="routeCenter"
              />
              <Route
                exact path="/bibliography"
                element={<BibliographyPage/>}
                className="routeCenter"
                />
                {isSurveySubmitted &&(
                  <Route
                    exact path="/surveyresults"
                    element={<SurveyResults userAnswers={userAnswers}/>}
                    className="routeLeft"
                    />
                )}

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
  .routeLeft{
    display:flex;
    justify-content: left !important;
  }
  .routeCenter{
    display:flex;
    justify-content: center;
  }
  .contentWrapper {
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center; */
  }
`;
