import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SurveyQuestion from "./SurveyQuestion";

const userAnswerData =
    {
        q1Answer:"yes",
        q2Answer:"no",
        q3Answer:"yes"
    }

export default function SurveyPage({setIsSurveySubmitted, setUserAnswers}){
    let navigate = useNavigate();
    const [surveyQuestion1, setSurveyQuestion1] = useState("Is this a question?");
    const [radioValueQ1, setRadioValueQ1] = useState(null);
    const [surveyQuestion2, setSurveyQuestion2] = useState("This is a really very long question. Of that I am quite sure. So I just wanted to ask you, is blue your most favorite color?");
    const [radioValueQ2, setRadioValueQ2] = useState(null);




    const handleSubmitClick = (e)=>{
        //validateForm();
        //getUserAnswers();
        setUserAnswers(userAnswerData);
        setIsSurveySubmitted(true);
        navigate("/surveyresults");
    }
     return(
        <PageWrapper>
            <div className="surveyTitle">Intellectual Property Survey</div>
            <SurveyQuestion questionText={surveyQuestion1} setRadioValue={setRadioValueQ1} nameOfGroup="group1"/>
            <SurveyQuestion questionText={surveyQuestion2} setRadioValue={setRadioValueQ2} nameOfGroup="group2"/>
            <button className="submitButton" onClick={handleSubmitClick}>Submit</button>
            <div className="marginBottom"/>
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center !important;
    justify-content: center !important;
    .surveyTitle{
        font-size:30px;
        margin-bottom:30px;
    }
    .submitButton{
        background: var(--primarySiteColor);
        color: var(--lightGrey);
        padding: 0.5rem 1.0rem;
        border-radius:5px;
        border: 2px solid var(--darkSiteColor);
        text-decoration:none;
    }
    .submitButton:hover{
        background: var(--darkSiteColor);

    }
`;