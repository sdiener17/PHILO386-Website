import React from 'react';
import styled from "styled-components";
import { PieChart, Pie} from 'recharts';


export default function SingleSurveyResult({question, data, userAnswer}){

    
    return (
        <PageWrapper>
            <div className="questionTitle">{question}</div>
            <div className="innerData">
            <PieChart width={300} height={300}>
            <Pie data={data} dataKey="students" outerRadius={150} className="pie" labelLine={true}/>
            
            </PieChart>
            <div className="userAnswerDiv">Your answer: {userAnswer}</div>
            </div>
        </PageWrapper>

    );
}

const PageWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin-right:10px;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
    width:500px;
    flex-wrap: wrap;
    .pie{
        fill: var(--secondarySiteColor);
    }
    .userAnswerDiv{
        margin-left:10px;
    }
    .innerData{
        display:flex;
        flex-direction: row;
        align-items: center;
    }
`;



