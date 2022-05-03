/* Author: Sarah Diener- sdiener@ksu.edu
 * Purpose: This is a component that makes up a single survey question. The text of the question is passed in as a variable,
 *  and the question is rendered as a yes/no radio button question.
 * Input: The text to be displayed on the question
 * Output: The component
 */
import React, { useState } from "react";
import styled from "styled-components";

export default function SurveyQuestion({ questionText, setRadioValue, nameOfGroup }) {
  const onRadioValueChange = (e) => {
    setRadioValue(e.target.value);
  };
  return (
    <PageWrapper>
      <div>{questionText}</div>
      <div>
        <label>
          <input
            className="radioButton"
            type="radio"
            value="Yes"
            name={nameOfGroup}
            id="radioButtonYes"
            onChange={onRadioValueChange}
          />
          Yes
        </label>
        <label>
          <input
            className="radioButton"
            type="radio"
            value="No"
            name={nameOfGroup}
            id="radioButtonNo"
            onChange={onRadioValueChange}
          />
          No
        </label>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
  border-radius: 10px;
  border: 3px solid var(--secondarySiteColor);
  padding:5px;
  margin-bottom:20px;
  width: 400px;
`;
