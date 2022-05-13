import React from 'react';
import styled from "styled-components";
import { PieChart, Pie, Cell} from 'recharts';


export default function SingleSurveyResult({question, data, userAnswer, index}){

    let renderLabel = function(entry) {
        return entry.label + " "+ "("+entry.students+")";
    }
    const COLORS = ['#6848b8', '#c0bd71'];
    
    return (
        <PageWrapper>
            <div className="questionTitle">{question}</div>
            <div className="innerData">
            <PieChart width={450} height={450}>
            <Pie data={data} dataKey="students" outerRadius={150} className="pie" labelLine={true} label={renderLabel} fill={COLORS[index % COLORS.length]}>
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
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
    margin-bottom:40px;
    width:700px;
    flex-wrap: wrap;
    border-bottom:5px solid var(--primarySiteColor);
    .pie{
        //fill: var(--purpleOne);
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



