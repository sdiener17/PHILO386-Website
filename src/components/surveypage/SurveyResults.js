import React from "react";
import styled from "styled-components";
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
      <div className="dataContainer">
        <div className="questionTitle">Is this a question?</div>
        <div className="smallDataContainer">
            <SingleSurveyResult data={dataQuestion1} />
            <div>Your answer: {userAnswers.q1Answer}</div>
        </div>
        

      </div>

      <div className="marginBottom" />
      <div className="marginBottom" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
