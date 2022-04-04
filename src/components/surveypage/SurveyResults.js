import React from "react";
import styled from "styled-components";
import { questions } from "../../data/questions";
import SingleSurveyResult from "./SingleSurveyResult";

export default function SurveyResults({userAnswers}) {
  // Sample data
  const dataQuestion1 = [
    { name: "Yes", students: 400 },
    { name: "No", students: 700 },
  ];

  return (
    <PageWrapper>
      <div className="marginTopPie" />
        {questions.map((item)=>
          <SingleSurveyResult question={item.questionText} data={item.questionData} userAnswer={userAnswers.q1Answer} />
        )}
        

      <div className="marginBottom" />
      <div className="marginBottom" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:40px;
  .marginTopPie {
    margin-bottom: 10px;
  }
  .dataContainer{
      display:flex;
      flex-direction:column;
      justify-content:center;
  }
  .smallDataContainer{
      display:flex;
      flex-direction:row;
      align-items:center;
      margin-right:10px;
  }
  .questionTitle{
      font-size:1.5rem;

  }
`;
