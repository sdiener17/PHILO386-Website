import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { questions } from "../../data/questions";
import SurveyQuestion from "./SurveyQuestion";

const userAnswerData =
    {
        q1Answer:"yes",
        q2Answer:"no",
        q3Answer:"yes"
    }

export default function SurveyPage({userAnswers, setIsSurveySubmitted, setUserAnswers}){
    let navigate = useNavigate();
    const [surveyQuestion1, setSurveyQuestion1] = useState("Is this a question?");
    const [radioValueQ1, setRadioValueQ1] = useState(null);
    const [surveyQuestion2, setSurveyQuestion2] = useState("");
    const [radioValueQ2, setRadioValueQ2] = useState(null);
    const [surveyQuestion3, setSurveyQuestion3] = useState("");
    const [radioValueQ3, setRadioValueQ3] = useState(null);
    const [surveyQuestion4, setSurveyQuestion4] = useState("");
    const [radioValueQ4, setRadioValueQ4] = useState(null);
    const [surveyQuestion5, setSurveyQuestion5] = useState("");
    const [radioValueQ5, setRadioValueQ5] = useState(null);
    const [surveyQuestion6, setSurveyQuestion6] = useState("");
    const [radioValueQ6, setRadioValueQ6] = useState(null);
    const [isError, setIsError] = useState(false);




    const handleSubmitClick = (e)=>{
        //let invalid = validateForm();
        // if(invalid===true){
        //     setIsError(true);
        //     return;
        // }
        constructUserAnswers();
        //setUserAnswers(userAnswerData);
        setIsSurveySubmitted(true);
        navigate("/surveyresults");
    }

    const validateForm = () =>{
        let invalid = false;
        // userAnswers.map((item)=>{
        //     if(item.value === null){
        //         invalid = true;
        //     }
        // })
        if(radioValueQ1.checked ===false){
            invalid = true;
        }
        return invalid;
    }


    const constructUserAnswers = ()=>{
        let tempAn = {
            q1Answer:radioValueQ1,
            q2Answer:radioValueQ2,
            q3Answer:radioValueQ3,
            q4Answer:radioValueQ4,
            q5Answer:radioValueQ5,
            q6Answer:radioValueQ6
        }
        setUserAnswers(tempAn);
    }

     return(
        <PageWrapper>
            <div className="surveyTitle">Intellectual Property Survey</div>
            <div className="textStuff">The purpose of this survey is to allow users to think for themselves what they think is ethical or not.
                Once completed, you will be shown what other users answered to see how your answers line up.
            </div>
            <SurveyQuestion questionText={questions[0].questionText} setRadioValue={setRadioValueQ1} nameOfGroup="group1"/>
            <SurveyQuestion questionText={questions[1].questionText} setRadioValue={setRadioValueQ2} nameOfGroup="group2"/>
            <SurveyQuestion questionText={questions[2].questionText} setRadioValue={setRadioValueQ3} nameOfGroup="group3"/>
            <SurveyQuestion questionText={questions[3].questionText} setRadioValue={setRadioValueQ4} nameOfGroup="group4"/>
            <SurveyQuestion questionText={questions[4].questionText} setRadioValue={setRadioValueQ5} nameOfGroup="group5"/>
            {/* <SurveyQuestion questionText={questions[5].questionText} setRadioValue={setRadioValueQ6} nameOfGroup="group6"/> */}
            {isError &&(
                <div className="errorDiv">Please answer all questions.</div>
            )}
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
        color: var(--lighterGrey);
        padding: 0.5rem 1.0rem;
        border-radius:5px;
        border: 2px solid var(--darkSiteColor);
        text-decoration:none;
    }
    .submitButton:hover{
        background: var(--darkSiteColor);

    }
    .textStuff{
        max-width:400px;
        margin-bottom:20px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    .errorDiv{
        color:red;
    }
`;