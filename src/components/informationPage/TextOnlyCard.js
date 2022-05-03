import React from "react";
import styled from "styled-components";

export default function InfoCard({text}){
    return(
        <PageWrapper>
            <div className="textWrap">
                {text}
            </div>
            
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;

    margin-bottom:40px;

    .textWrap{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        max-width:1000px;
        padding:10px;
        background-color:var(--lightGrey);
        border-radius: 10px;
        font-size: 1.2rem;
    }
`;