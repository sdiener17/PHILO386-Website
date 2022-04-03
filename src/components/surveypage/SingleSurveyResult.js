import React from 'react';
import styled from "styled-components";
import { PieChart, Pie} from 'recharts';


export default function SingleSurveyResult({data}){

    
    return (
        <PageWrapper>
            <PieChart width={300} height={300}>
            <Pie data={data} dataKey="students" outerRadius={150} className="pie" labelLine={true}/>
            </PieChart>
        </PageWrapper>

    );
}

const PageWrapper = styled.div`
    display:flex;
    margin-right:10px;
    .pie{
        fill: var(--secondarySiteColor);
    }
`;



